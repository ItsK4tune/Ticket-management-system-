import pool from "../../Configs/general Configs/connectDB";

let createUser = async (username, password) => {
    try {
        const result = await pool.execute('INSERT INTO login_data (Username, Password) VALUES (?, ?)', [username, password]);
    } 
    catch (error) {
        console.error('Error creating user:', error);
    }
}

module.exports = createUser;
