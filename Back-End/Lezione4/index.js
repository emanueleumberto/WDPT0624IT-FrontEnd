// Importo le dipendenze necessario per il progetto
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer  = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const sgMail = require('@sendgrid/mail')
require('dotenv').config();
/* sgMail.setApiKey(process.env.SENDGRID_API_KEY) */
sgMail.setApiKey(SENDGRID_API_KEY)


// Imposto l'app express e definisco i dati della connessione
const app = express();
const port = 3001;
const dbName = "Lezione3";

// Middlewares
app.use(cors()); // middleware per la gestione del CORS
app.use(express.json()); // middleware per la gestione del formato JSON


// Utilizzo di Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) { cb(null, 'uploads/')}, // imposto la cartella di destinazione dei file 
    filename: function (req, file, cb) { cb(null, file.originalname)} // imposto il nome del file
})

function fileFilter(req, file, cb) {
    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
    
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        // To accept the file pass `true`, like so:
        cb(null, true)
    } else {
        // To reject this file pass `false`, like so:
        cb(null, false)
        // You can always pass an error if something goes wrong:
        return cb(new error('Formato non consentito!!!'))
    }
}

const upload = multer({ storage: storage, fileFilter: fileFilter })


// Utilizzo di Multer con Cloudinary

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_APY_KEY,
    api_secret: process.env.CLOUDINARY_APY_SECRET_KEY
})

const storageCloud = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'cloud-upload',
      format: async (req, file) => 'png', // supports promises as well
      public_id: (req, file) => file.originalname,
    },
  });

const cloud = multer({ storage: storageCloud })

// Routes

app.post('/upload', upload.single('uploaded_file'), (req, res) => {
    const file = req.file;
    console.log(file)
    res.status(200).json({message: "File ricevuto!!!"})
})

app.post('/upload-cloud', cloud.single('uploaded_file_cloud'), (req, res) => {
    const file = req.file;
    console.log(file)
    res.status(200).json({message: "File ricevuto!!!"})
})

app.get('/send-email', async (req, res) => {
    /* console.log('send-email');
    res.status(200).json({message: "Email inviata!!!"}) */

    const msg = {
        to: 'test@example.com', // Change to your recipient
        from: 'info@emanueleumberto.it', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }
      try {
        await sgMail.send(msg)
            .then((response) => {
            console.log(response[0].statusCode)
            console.log(response[0].headers)
            return res.status(response[0].statusCode).json({...response[0]})
            })
            .catch((error) => {
            console.error(error)
            return res.status(500).json({...error})
            })
      } catch(error) {
        console.error(error)
        return res.status(500).json({...error})
      }

})


// Connect to DB and start the Server
mongoose.connect(process.env.MONGODB_URL + dbName)
        .then(resp => app.listen(port, () => console.log("Server attivo sulla porta " + port)))
        .catch(err => console.error(err))