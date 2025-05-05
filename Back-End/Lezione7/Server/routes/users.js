// Importo le dipendenze necessario per il progetto
const express = require('express');
const router = express.Router();

// Import Model
const userModel = require("../models/users")

// Import Middleware
const authMiddleware = require("../middlewares/authMiddleware")

// Users Routes
router.get('/', (req, res) => {
    return res.status(200).json({message: "Hello World!!"})
})

router.get('/users', authMiddleware, async (req, res) => {
    const allUser = await userModel.find();
    return res.status(200).json(allUser)
})


// Export Router
module.exports = router;