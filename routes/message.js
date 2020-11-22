var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    const id = '0003';
    const message = {
        id: id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    };

    return res.send(message);
})

module.exports = router;
