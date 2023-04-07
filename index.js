const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
require('./config/passport')(passport);

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', users);

app.use(passport.initialize());

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