import jwt from 'jsonwebtoken'
import Secret from './jwtSecret'

const decoder = (token) =>{
    const decode = jwt.decode(token, Secret.jwtSecret);
}

module.exports = decoder