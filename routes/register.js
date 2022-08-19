const { json } = require('express');
var express = require('express');
var router = express.Router();
var db = require('../config/db');
var Result = require('../utils/returnMsg')

/* GET home page. */
router.post('/', function (req, res, next) {
  db.query({ sql: `select * from user where username = '${req.body.username}'`, datas: '' }).then(resT => {
    let Res = new Result(JSON.parse(JSON.stringify(resT)),'该账号已注册')
    Res.fail()
    res.send(JSON.stringify(Res));
  }).catch(err => {
    db.insert({ table: 'user', datas: req.body }).then(resT => {
      if (resT.affectedRows == 1) {
        let Res = new Res(JSON.parse(JSON.stringify(resT)),'注册成功')
        Res.success()
        res.send(JSON.stringify(resT));
      }
    }).catch(err => {
      console.log(err);
    });
  });

  
  // console.log(new Result(1,2,3))


});

module.exports = router;
