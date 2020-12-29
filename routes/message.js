var express = require('express');
var router = express.Router();
var sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post('/', function(req, res) {
    const message = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        fromEmail: req.body.email
    };

    const sendGridMessage = {
        to: 'alexasnyder226@gmail.com',
        from: 'amswebsite226@gmail.com', // verified sender
        subject: 'Test Email',
        text: 'Send from alexa\'s personal site',
        html: '<h2>YASS</h2>'
    }

    sgMail
        .send(sendGridMessage)
        .then(() => {
            return res.send('Email sent!');
        })
        .catch((error) => {
            console.error(error)
        })
})

module.exports = router;
