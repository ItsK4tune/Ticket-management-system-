let requestCount = 0;

let queue = [];

let timeWindow = async (req, res, next) => {
    requestCount++;

    const body = req.body;
    queue.push({req, res, next});

    new Promise((resolve) => {
        if (requestCount >= 2){
            requestCount = 0;
            next();
            queue = [];
            resolve();
        }
    })
}

module.exports = {timeWindow, queue};
