const express = require('express');
const router = express.Router();

const userModel = require('../models/Users')
const debug = require('../middlewares/debug')

// Routes
router.get('/', debug.singleLog, (req, res) => {
    res.send("Hello World!!")
})

router.get('/users', async (req, res) => {
    const users = await userModel.find();
    res.status(200).json(users);
})

router.get('/users/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const user = await userModel.findById(id);
        res.status(200).json(user);
    } catch (err) {
        //res.status(500).json({error: err.message})
        next(err)
    }
})

router.post('/users', async (req, res, next) => {
    try {
        const obj = req.body;
        const user = new userModel(obj);
        const dbUser = await user.save();
        res.status(201).json(dbUser)
    } catch(err) {
        next(err)
    }
})

router.put('/users/:id', async (req, res, next) => {
    const id = req.params.id;
    const obj = req.body;
    try {
        const userUpdate = await userModel.findByIdAndUpdate(id, obj)
        res.status(200).json(userUpdate)
    } catch(err) {
        //res.status(500).json({error: err.message})
        next(err)
    }
})

router.delete('/users/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        await userModel.findByIdAndDelete(id);
        res.status(200).json({message: "User deleted!"})
    } catch (err) {
        //res.status(500).json({error: err.message})
        next(err)
    }
})


// Esportare tutti gli endpoints creati
module.exports = router;