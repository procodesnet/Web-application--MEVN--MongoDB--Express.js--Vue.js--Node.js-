const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
const User = require('../../model/User');

const router = express.Router();

router.post('/register', (req, res) => {
    let {
        name,
        email,
        username,
        password,
        confirm_password
    } = req.body;
    if (password !== confirm_password) {
        return res.status(400).json({
            msg: "Password do not match."
        });
    }
    User.findOne({
        username: username
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "Username is already taken."
            });   
        }
    });
    User.findOne({
        email: email
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "Email is already registred."
            });   
        }
    });
    let newUser = new User({
        name,
        email,
        username,
        password
    });
    bcryptjs.genSalt(10, (err, salt) => {
        bcryptjs.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "User is registered."
                });
            });
        });
    });
});

router.post('/login', (req, res) => {
    User.findOne({
        username: req.body.username
    }).then(user => {
        if(!user) {
            return res.status(404).json({
                success: false,
                msg: "Username is not found."
            });
        }
        bcryptjs.compare(req.body.password, user.password).then(isMatch => {
            if(isMatch) {
                const payload = {
                    _id: user._id,
                    username: user.username,
                    name: user.name,
                    email: user.email
                }
                jwt.sign(payload, key, {
                    expiresIn: 604800
                }, (err, token) => {
                    res.status(200).json({
                        success: true,
                        token: `Bearer ${token}`,
                        msg: "You are now logged in."
                    });
                });
            } else {
                return res.status(404).json({
                    success: false,
                    msg: "Incorrect password."
                });
            }
        })
    });
});

router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    });
});

module.exports = router;