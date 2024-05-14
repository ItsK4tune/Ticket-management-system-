import jwt from 'jsonwebtoken'
import Secret from './jwtSecret'

const verifyToken = (req, res, next) => {
    // Get the JWT token from the request parameter
    const token = req.params.token;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {   
        // Verify the JWT token
        const decode = jwt.verify(token, Secret.jwtSecret);
        // Get username
        const {user} = decode;

        // Send data
        req.user = user;

        next();
    } catch (error) {
        // return res.status(401).json({ error: 'Unauthorized' });
        return res.redirect('/trang-chu');
    }
};

module.exports = verifyToken;