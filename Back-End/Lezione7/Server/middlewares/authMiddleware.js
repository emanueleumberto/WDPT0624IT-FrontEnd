// Importo le dipendenze necessario per il progetto
var jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtSecretKey = process.env.JWT_SECRET_KEY;

// Import Model
const userModel = require("../models/users")

// Middleware
const authMiddleware = async (req, res, next) => {
    //console.log("Sono authMiddleware!")
    try {
        const tokenBearer = req.headers.authorization
        if(tokenBearer !== undefined){
            const token = tokenBearer.replace('Bearer ', '')
            const data = await verifyJWT(token)
            console.log(data)
            if(data.exp) {
                const me = await userModel.findById(data.id)
                if(me) {
                    req.user = me
                    next()
                } else {
                    res.status(401).send('User not found!')
                }
            } else {
                res.status(401).send('Please login again!!')
            }
        } else {
            res.status(401).send('Token required!')
        } 
        
    } catch(err) {
        next('Token error!!')
    }
}


const verifyJWT = (token) => {
    return new Promise((res, rej) => {
        jwt.verify(token, jwtSecretKey, (err, data) => {
            if(err) res(err)
            else res(data)
        })
    })
}

module.exports = authMiddleware;