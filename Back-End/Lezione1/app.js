const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');

const app = express()
const port = 3001
const dbName = 'TestEpicode'

// Middleware
app.use(cors())
app.use(express.json())

/* let users = [
    {id:1, name: 'Mario', lastname: "Rossi", email:"m.rossi@example.com"},
    {id:2, name: 'Giuseppe', lastname: "Verdi", email:"g.verdi@example.com"},
    {id:3, name: 'Francesca', lastname: "Neri", email:"f.naeri@example.com"}
]

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/users', (req, res)=> {
    res.json(users)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id
    let obj = users.find(u => u.id === +id);
    res.json(obj)
}) */

const userSchema = new mongoose.Schema({
    name: {type: 'string', required: true},
    lastname: {type: 'string', required: true},
    email: {type:'string', required: true}
})

const userModel = mongoose.model('Users', userSchema)


app.get('/', (req, res) => {
    res.json({message: 'App connect!!!'})
})

// EndPoint per leggere tutti gli oggetti presenti nella Collection di MongoDB
app.get('/users', async (req, res) => {
    const users = await userModel.find()
    res.status(200).json(users)
})

// EndPoint per leggere il dettaglio di un oggetto con un determinato ID presente nel DB
app.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const user = await userModel.findById(id)
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

// EndPoint per scrivere un oggetto che invia il client tramite il body della request nel DB
app.post('/users', async (req, res) => {
    const obj = req.body;
    const newUser = new userModel(obj)
    const dbUser = newUser.save()
    res.status(201).json(dbUser)
})

// EndPoint per modificare un oggetto con un determinato ID presente nel DB con un oggetto modificato che invia il client tramite il body
app.put('/users/:id', async (req, res) => {
    const id = req.params.id;
    const obj = req.body;
    try{
        const userUpdate = await userModel.findByIdAndUpdate(id, obj);
        res.status(200).json(userUpdate);
    } catch(err){
        res.status(500).json({message: err.message});
    }
})
// EndPoint per cancellare un oggetto con un determinato ID presente nel DB
app.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
    try{
        await userModel.findByIdAndDelete(id);
        res.status(200).json({message: 'success'});
    } catch(err){
        res.status(500).json({message: err.message});
    }
})

async function start() {
    try{
        await mongoose.connect('mongodb+srv://admin:FEBQVLnIaV74oAQk@cluster0.7opl1ou.mongodb.net/'+dbName) 
        app.listen(port, () => {
            console.log(`Node app listening on port ${port}`)
        })
    } catch(err) {
        console.error(err)
    }
}

start();


   
