import pool from '../../Configs/general Configs/connectDB'

let bookSeat = async (location, username) => {
    try {
        await pool.execute('UPDATE seat_data SET Stat = true WHERE Location = ?', [location]);
        await pool.execute('UPDATE seat_data SET Username = ? WHERE Location = ?', [username, location])
    } 
    catch (error) {
        console.error('Error getting data from database:', error);
    }
}

module.exports = bookSeat