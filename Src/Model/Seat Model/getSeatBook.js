import pool from '../../Configs/general Configs/connectDB'

let getSeatBooked = async (username) => {
    try {
        const [rows, field] = await pool.execute('SELECT Location FROM seat_data WHERE Stat = 1 AND Username = ?', [username]);

        return JSON.stringify(rows);
    } 
    catch (error) {
        console.error('Error getting data from database:', error);
    }
}

module.exports = getSeatBooked