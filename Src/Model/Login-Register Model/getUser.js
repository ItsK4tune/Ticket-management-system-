import pool from "../../Configs/general Configs/connectDB";

let getUser = async (username, password) => {
    try {
        const [rows, field] = await pool.execute('SELECT * FROM login_data WHERE Username = ? and Password = ?', [username, password]);

        // Check whether rows is null or not
        return rows.length ? rows[0] : null;
    } 
    catch (error) {
        console.error('Error getting user by username:', error);
    }
}

module.exports = getUser;
