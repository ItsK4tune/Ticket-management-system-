import pool from '../../Configs/general Configs/connectDB'

let getUserExist = async (location) => {
    try {
        const [check] = await pool.execute('SELECT Username FROM seat_data WHERE Location = ?', [location]);

        return check[0];
    } 
    catch (error) {
        console.error('Error getting data from database:', error);
    }
}

module.exports = getUserExist