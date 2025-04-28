// Importo le dipendenze necessario per il progetto
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Imposto l'app express e definisco i dati della connessione
const app = express();
const port = 3001;
const dbName = "Lezione5";

// Middlewares
app.use(cors()); // middleware per la gestione del CORS
app.use(express.json()); // middleware per la gestione del formato JSON

// Model
const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    date: {type: Date, required: true}
})

const postModel = mongoose.model('Posts', postSchema);

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastname: {type: String, required:true },
    age: {type: Number, required: false, default: 18},
    email: {type: String, required: true, unique: true},
    address: {
        street: {type: String},
        city: {type: String},
        state: {type: String}
    },
    posts: [
        {type: mongoose.Schema.ObjectId, ref: 'Posts'}
    ] 
})

const userModel = mongoose.model('Users', userSchema);

// Endpoint

app.get('/create_user', async (req, res) => {
    const post = {
        title: "Referencing",
        body: "Post di esempio Referencig MongoDB",
        date: Date.now()        
    }
    const newPost = new postModel(post);
    const postSave = await newPost.save();

    let obj = {
        name: "Mario",
        lastname: "Rossi",
        age: 25,
        email: "m.rossi@example.com",
        address: {
            street: "Via Epicode 17",
            city: "Roma",
            state: "Italia"
        },
        posts: [postSave]
    }
    let newUser =  new userModel(obj);
    let userSave = await newUser.save();
    return res.status(201).json(userSave)
})

app.get('/users', async (req, res) => {
    const users = await userModel.find();
    return res.status(200).json(users)
})

app.get('/users-posts', async (req, res) => {
    const users = await userModel.find().populate('posts');
    return res.status(200).json(users)
})

// Connect to DB and start the Server
mongoose.connect(process.env.MONGODB_URL + dbName)
        .then(resp => app.listen(port, () => console.log("Server attivo sulla porta " + port)))
        .catch(err => console.error(err))