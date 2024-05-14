import jwt from 'jsonwebtoken'
import Secret from '../../Configs/jwt Configs/jwtSecret'
import getUser from '../../Model/Login-Register Model/getUser'

let Login = {
    
    // Login UI
    LoginPage: (req, res) => {res.render('Login')},

    // Login API
    LoginFunction: async (req, res) => {

        const {Username, Password} = await req.body;
    
        try {
            // Retrieve user by username from the database
            const user = await getUser(Username, Password);
            
            if (!user) {
                console.log('>>>>>Login failed!!!');
                return res.json({ message: 'Failed'} )
            }

            // Generate JWT token
            const token = jwt.sign({ user: Username, pass: Password }, Secret.jwtSecret, { expiresIn: '1h' });

            // Respond with success message and redirectURL
            res.json({ message: 'Successed', redirectURL: `/trang-chu/${token}` })

            console.log('>>>>>Login successful <3 <3');
        }
        catch (error) {
            console.error('Error logging in:', error);
            res.status(500)
        }
    }
}

module.exports = Login;