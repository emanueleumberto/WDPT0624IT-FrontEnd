// Importo le dipendenze necessario per il progetto
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Imposto l'app express e definisco i dati della connessione
const app = express();
const port = 3001;
const dbName = "Lezione3";

// Middlewares
app.use(cors()); // middleware per la gestione del CORS
app.use(express.json()); // middleware per la gestione del formato JSON

// Middlewares custom
const debug = require('./middlewares/debug')
app.use(debug.logger)
//app.use(debug.ceckApiKey)

//const userModel = require('./models/Users')

// Routes
const routes = require('./routes/user_routes')
app.use(routes)

// Middlewares per la gestione degli errori
const error = require('./middlewares/error')
app.use(error.errorHandler);
app.use(error.pageNotFoundHandler);

// Connect to DB and start the Server
mongoose.connect(process.env.MONGODB_URL + dbName)
        .then(resp => app.listen(port, () => console.log("Server attivo sulla porta " + port)))
        .catch(err => console.error(err))