var express = require('express');
var router = express.Router();
require("es6-promise").polyfill();
require("isomorphic-fetch");

router.post('/', async (req, res) => {
    const body = req.body;
    const token = body.token;

    const secret = process.env.RECAPTCHA_SECRET_KEY;
    const validationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`;

    const response = await fetch(validationUrl, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
          },
    })

    return res.send(await response.json());
})

module.exports = router;