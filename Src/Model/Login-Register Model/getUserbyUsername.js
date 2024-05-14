import pool from "../../Configs/general Configs/connectDB";

let getUserbyUsername = async (username) => {
    try {
        const [rows, field] = await pool.execute('SELECT * FROM login_data WHERE Username = ?', [username]);

        // Check whether rows null or not
        return rows.length ? rows[0] : null;
    } 
    catch (error) {
        console.error('Error getting user by username:', error);
    }
}

module.exports = getUserbyUsername;
