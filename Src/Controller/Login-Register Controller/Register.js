import getUserbyUsername from '../../Model/Login-Register Model/getUserbyUsername'
import createUser from '../../Model/Login-Register Model/createUser'

let Register = {

    // Register UI
    RegisterPage: (req, res) => {
        res.render('Register')
    },

    // Register API
    RegisterFunction: async (req, res) => {
        const {Username, Password} = req.body;

        try {
            // Check if the username is already taken
            const existingUser = await getUserbyUsername(Username);
            if (existingUser) {
                console.log('<<<<<Register failed!!');
                return res.status(400).json({ message: 'Username is already taken' });
            }

            // Create the new user
            const userId = await createUser(Username, Password);

            // Respond with success message
            console.log("<<<<<Register successful <3 <3")
            res.status(201).json({ message: 'User registered successfully'});
        } 
        catch (error) {
            console.error('Error registering user:', error);
            res.status(500)
        }
    }
}

module.exports = Register;