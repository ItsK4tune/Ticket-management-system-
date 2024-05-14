import pool from '../../Configs/general Configs/connectDB'

let deleteSeat = async (location) => {
    try {
        await pool.execute('UPDATE seat_data SET Stat = false WHERE Location = ?', [location]);
        await pool.execute('UPDATE seat_data SET Username = NULL WHERE Location = ?', [location]);        
    } 
    catch (error) {
        console.error('Error getting data from database:', error);
    }
}

module.exports = deleteSeat