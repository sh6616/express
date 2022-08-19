var express = require('express');
var router = express.Router();
const db = require('../config/db'); //引入封装的db模块
var Result = require('../utils/returnMsg')
/* GET users listing. */
router.post('/add/', function (req, res, next) {
  db.insert({ table: 'department_add', datas: req.body }).then(resT => {
    let Res = new Result('', '新增成功')
    Res.success()
    res.send(JSON.stringify(Res));
  }).catch(err => {
    console.log(err);
  });
});

router.post('/getList/', function (req, res, next) {
  console.log(req.body)
  if (req.body.value == '') {
    db.query({ sql: 'select * from department_add', datas: '' }).then(resT => {
      console.log(resT)
      let Res = new Result(JSON.parse(JSON.stringify(resT)), '')
      Res.success()
      res.send(JSON.stringify(Res));
    }).catch(err => {
      console.log(err);
    });
  } else {
    db.query({ sql: `select * from department_add where name = '${req.body.value}'`, datas: '' }).then(resT => {
      let Res = new Result(JSON.parse(JSON.stringify(resT)), '')
      Res.success()
      res.send(JSON.stringify(Res));
    }).catch(err => {
      console.log(err);
    });
  }


});

module.exports = router;
