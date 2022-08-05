var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
  console.log("55555555")
  // res.setHeader('Content-Type', 'application/json');
  res.send({
    'resCode': 1,
    'verificatCode': '111111'
  });
});

module.exports = router;
