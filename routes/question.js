var express = require('express');
var router = express.Router();
var data = require('../data/questions');


/* get question */
router.get('/', function(req, res, next) {
    res.status(200).send({
        statusCode: 200,
        message: "Success",
        data
    });
});

module.exports = router;
