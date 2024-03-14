const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

// Register route
router.post('/register', (req, res) => {
    const { username, password } = req.body;

    userModel.createUser(username, password, (err, result) => {
        if (err) {
            console.error('Error registering user', err);
            res.status(500).send('Error registering user');
            return;
        }
        res.status(200).send('User registered successfully');
    });
});

// Login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    userModel.getUserByUsernameAndPassword(username, password, (err, result) => {
        if (err) {
            console.error('Error logging in user', err);
            res.status(500).send('Error logging in user');
            return;
        }

        if (result.length === 0) {
            res.status(401).send('Invalid username or password');
            return;
        }

        res.status(200).send('Login successful');
    });
});

module.exports = router;
