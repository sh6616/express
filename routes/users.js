var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send({
    'resCode': 1,
    'verificatCode': '111111',
    "message":"请求成功"
  });
});

module.exports = router;
