// Importo le dipendenze necessario per il progetto
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config();
const saltRounds = +process.env.SALT_ROUNDS;
const jwtSecretKey = process.env.JWT_SECRET_KEY;

// Import Model
const userModel = require("../models/users")

// Ogg che invierà il client tramite una chiamata ajax
/* {
    "fullname" : "John Smith",
    "username" : "johnsmith",
    "email" : "johnsmith@example.com",
    "password" : "Pa$$w0rd!",
    "verified" : false
} */

// Auth Routes
router.post('/auth/register', async(req, res) => {
    // Logica per la registrazione di un utente
    /* const obj = req.body;
    const user = new userModel(obj)
    const userSave = await user.save()
    return res.status(201).json(userSave) */

    const password = req.body.password;

    // Store hash in your password DB.
    const user = new userModel({
        ...req.body,
        password: await bcrypt.hash(password, saltRounds)
    })
    const userSave = await user.save()
    return res.status(201).json(userSave)

})

// Ogg che invierà il client tramite una chiamata ajax
/* {
    "username" : "johnsmith",
    "password" : "Pa$$w0rd!",
} */

router.post('/auth/login', async(req, res) => {
    // Logica per il login di un utente
    const username = req.body.username // oppure una email
    const password = req.body.password

    const userLogin = await userModel.findOne({username: username})
    console.log(userLogin)
    if(userLogin) {
        // Lo username è stato trovato nel DB
        // Controllo la password
        const log = await bcrypt.compare(password, userLogin.password)
        if(log) {
            // La password è corretta
            // Genero un Token JWT
            
            // Soluzione 1
            /* const token = jwt.sign(
                {
                    id: userLogin.id,
                    username: userLogin.username,
                    fullname: userLogin.fullname,
                    email: userLogin.email
                }
                , jwtSecretKey, { expiresIn: '1h' }); */

                // Soluzione 2
                const token = await generateToken({
                    id: userLogin.id,
                    username: userLogin.username,
                    fullname: userLogin.fullname,
                    email: userLogin.email
                })
            return res.status(200).json(token)
        } else {
            // La password è errata
            return res.status(400).json({message: 'Invalid Password!!'})
        }
    } else {
        // Lo username non è stato trovato nel DB
        return res.status(400).json({message: 'Invalid Username!!'})
    }

})


// Funzione Soluzione 2 creazione di un token
const generateToken = (payload) => {
    return new Promise((res, rej) => {
        jwt.sign(payload, jwtSecretKey, { expiresIn: '1h' }, (err, token) => {
            if(err) rej(err)
            else res(token)
        });
    })
}



// Export Router
module.exports = router;