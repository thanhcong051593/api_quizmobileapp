var express = require('express');
var answers = require('../data/answers');

function check(filter){
    const { question, option } = filter;
    if(!answers[question]){
        return {
            statusCode: 404,
            message: 'Find not found',
            question: question,
            option: option,
        }
    }
    const correctOption = answers[question]['correctoption'];
    if(option == correctOption){
        return {
            statusCode: 200,
            message: 'Success',
            question: question,
            option: option,
            correct: true
        }
    }else {
        return {
            statusCode: 200,
            message: 'Success',
            question: question,
            option: option,
            correct: false
        }
    }
}

module.exports = check;
