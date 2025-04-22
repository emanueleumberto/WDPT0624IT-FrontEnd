const mongoose = require('mongoose');

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

// Esportare i dati
module.exports = userModel;