require('dotenv').config();

if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: process.env.mongoURI,
        secret: process.env.secret
    };
} else {
    module.exports = {
        mongoURI: "mongodb://localhost:27017/mevn",
        secret: process.env.secret
    };
}