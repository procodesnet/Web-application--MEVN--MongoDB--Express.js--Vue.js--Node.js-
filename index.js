const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

const db = require('./config/keys').mongoURI;
mongoose.connect(db, {
    useNewUrlParser: true
}).then(() => {
    console.log(`Connected to the database: ${db}`)
}).catch(err => {
    console.log(`Unable to connect to the database: ${err}`)
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
});