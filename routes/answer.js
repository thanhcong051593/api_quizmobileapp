var express = require('express');
var router = express.Router();
var answer = require('../services/answer');


/* get answer */
router.get('/', function(req, res, next) {
    const { question, option } = req.query;
    if(!question || !option) {
        mess = {
            statusCode: 400,
            message: 'Bad request'
        }
        res.status(400).send(mess);
    };
    const filter ={
        question,
        option
    }
    let data = answer(filter);
    if(data.statusCode === 404){
        res.status(404).send(data);
    }
    res.status(200).send(data);
   
});

module.exports = router;
