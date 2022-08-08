var express = require('express');
var router = express.Router();
var db = require('../config/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("1321321")
  // res.render('index', { title: 'Express' });
  db.query('SELECT * FROM users', [], function (results, fields) {
    // 以json的形式返回
    console.log(results)
    // res.json({ results })
   })
});

module.exports = router;
