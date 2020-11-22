var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('API is running with <3 from Azure App Services');
});

module.exports = router;
