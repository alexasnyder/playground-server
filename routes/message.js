require('dotenv').config();
var express = require('express');
var router = express.Router();
var sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post('/', function(req, res) {

    const sendGridMessage = {
        to: 'alexasnyder226@gmail.com',
        from: 'amswebsite226@gmail.com', // verified sender
        subject: `New Message From ${req.body.firstName} ${req.body.lastName}`,
        text: 'Send from alexa\'s personal site',
        html: `
            <div>
            <p>${req.body.message}</p>
            <p>Contact at: ${req.body.email}</p>
            </div>
        `
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
