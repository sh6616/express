var express = require('express');
var router = express.Router();
var db = require('../config/db');
var Result = require('../utils/returnMsg')

/* GET home page. */
router.post('/', function (req, res, next) {
  console.log(req.body)
  db.query({ sql: `select * from user where username = '${req.body.username}'`, datas: '' }).then(resT => {
    console.log(resT.length)
    if (resT.length != 0) {
      let Res = new Result(JSON.parse(JSON.stringify(resT)), '登录成功')
      Res.success()
      res.send(JSON.stringify(Res));
    } else if (resT.length == 0) {
      let Res = new Result(JSON.parse(JSON.stringify(resT)), '登录失败,请注册用户')
      Res.fail()
      res.send(JSON.stringify(Res));
    }
  }).catch(err => {
    console.log(err);
  });
});

module.exports = router;
