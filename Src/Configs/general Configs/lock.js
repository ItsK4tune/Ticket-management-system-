import Redis from 'ioredis';
// import { requestQueue } from './timeWindow';

class RedisLock {
    constructor(lockKeyPrefix) {
        this.redisClient = new Redis('redis://localhost:3001');
        this.lockKeyPrefix = lockKeyPrefix;
    }

    async acquireLock(resource, expirationTimeMs){
        const lockKey = this.getLockKey(resource);
        this.redisClient.keys(lockKey, async(err, keys) => {
            if (err){
                await this.redisClient.set(lockKey, 'LOCKED', 'PX', expirationTimeMs, 'NX');
                return true;
            }
        });
        const acquired = await this.redisClient.set(lockKey, 'LOCKED', 'PX', expirationTimeMs, 'NX');
        return acquired !== null;
    }

    async releaseLock(resource){
        const lockKey = this.getLockKey(resource);
        const deleted = await this.redisClient.del(lockKey);
        return deleted === 1;
    }

    getLockKey(resource){
        return `${this.lockKeyPrefix}:${resource}:lock`;
    }
}

// Example usage
let reserveSeat = async (req, res, next) => {
    const lockKeyPrefix = 'myapp'; // Prefix for lock keys
    const lockExpirationMs = 30000; // Lock expiration time in milliseconds

    const redisLock = new RedisLock(lockKeyPrefix);
    
    const {Location} = req.body;

    const resource = Location;

    // Acquire the lock
    const lockAcquired = await redisLock.acquireLock(resource, lockExpirationMs);

    if (lockAcquired) {
        try {
            console.log('Lock acquired, performing operations...');
            next();
            console.log('Operations completed.');
        }
        catch(err){

        }
    } else {
        console.log('Failed to acquire lock.');
        return res.send('Failed to acquire lock.')
    }
    // Disconnect Redis client
    redisLock.redisClient.disconnect();
}

module.exports = reserveSeat;