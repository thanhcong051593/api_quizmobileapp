var express = require('express');
var router = express.Router();
var data = require('../data/quiz')


/* GET Quizs */
router.get('/', function(req, res, next) {
    res.status(200).send(data);
});

module.exports = router;
