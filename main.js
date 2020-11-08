const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
require("dotenv").config();

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())

// Configuring the database
const dbConfig = require('./db/config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("banco conectado com sucesso!");    
}).catch(err => {
    console.log('erro ao conectar ao banco', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Bem vindo a lista de clientes"});
});

require('./app/routes/routes.js')(app);

// listen for requests
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Servidor listado na porta http://localhost:${process.env.SERVER_PORT}`);
});