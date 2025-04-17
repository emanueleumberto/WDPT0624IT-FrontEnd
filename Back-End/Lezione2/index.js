const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')


const app = express();
const port = 3001;
const dbName = "Lezione2"

// Middlewares
app.use(cors()) // middleware per la gestione dei CORS
app.use(express.json()) // middleware per la gestione del formato JSON

// Models
// Lo schema di Mongoose sarà la struttura di ogni oggetto che salverò nella collection
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    city: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true }
})
// Model permette di creare un oggetto che definisce la struttura(schema) del DB e lo collega ad una collection
const userModel = mongoose.model('Users', userSchema)

app.get('/users', async (req, res) => {
    const users = await userModel.find();
    res.status(200).json(users);
})

app.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await userModel.findById(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

app.post('/users', async (req, res) => {
    const obj = req.body;
    const user = new userModel(obj);
    const dbUser = await user.save();
    res.status(201).json(dbUser)
})

app.put('/users/:id', async (req, res) => {
    const id = req.params.id;
    const obj = req.body;
    try {
        const userUpdate = await userModel.findByIdAndUpdate(id, obj)
        res.status(200).json(userUpdate)
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})

app.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await userModel.findByIdAndDelete(id);
        res.status(200).json({message: "User deleted!"})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

// Query MongoDB

app.get('/params', async (req, res) => {
    // http://localhost:3001/params?page=1&size=3&order=name
    
    // Gestione dei paramentri passati tramite una query String
    // sort(sort) | size(limit) | page(skip)
    console.log(req.query)

    const size = req.query.size;
    const skip = (req.query.page-1) * size; 
    const prop = req.query.order;

    const fu = await userModel.find({age: { $gt: 40 }});
    const fn = await userModel.find({ name: { $eq: 'Mario' } });
    const fand = await userModel.find({ $and: [ {age: { $gt: 40 }}, { name: { $ne: 'Mario' } }] })

    //await userModel.find().limit(size).skip(page).sort({[prop]: 1})
    const filterUser = await userModel.find().sort({[prop]:1}).limit(size).skip(skip)
    return res.status(200).json(filterUser)
})

// Connessione al DB Mongo e avvio del server
async function connect() {
    try {
        // Codice che potrebbe causare un errore di connessione al DB Mongo
        await mongoose.connect('mongodb+srv://admin:FEBQVLnIaV74oAQk@cluster0.7opl1ou.mongodb.net/'+dbName)
        app.listen(port, () => console.log("Server attivo sulla porta " + port))
    } catch (err) {
        console.error(err)
    }
    
}
connect();