var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CodeGym – Hệ thống đào tạo lập trình hiện đại' });
});

module.exports = router;
