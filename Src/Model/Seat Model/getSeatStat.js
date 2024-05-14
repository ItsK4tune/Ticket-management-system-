import pool from '../../Configs/general Configs/connectDB'

let getSeatStat = async () => {
    try {
        const [rows, field] = await pool.execute('SELECT Location, Stat FROM seat_data');
        console.log(rows)
        return JSON.stringify(rows);
    } 
    catch (error) {
        console.error('Error getting data from database', error);
    }
}

module.exports = getSeatStat;