const express = require('express');
const router = express.Router();

// Connect to Contact model
const Contact = require('../models/contact');

// Route to handle contact form submission
router.post('/', (req, res, next) => {
    const newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    newContact.save((err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/contact'); // Redirect to a thank you page or home page
        }
    });
});

module.exports = router;
