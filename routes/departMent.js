var express = require('express');
var router = express.Router();
const db = require('../aa/db'); //引入封装的db模块
/* GET users listing. */
router.post('/add/', function (req, res, next) {
  db.insert({ table: 'department_add', datas: req.body }).then(resT => {
    if(resT.affectedRows == 1){
      res.send(resT);
    }
  }).catch(err => {
    console.log(err);
  });
});

router.post('/getList/', function (req, res, next) {
  console.log(req.body)
  db.query({ sql: 'select * from department_add', datas: req.body }).then(resT => {
    console.log('111111111111111')
    console.log(resT)

    res.send(resT);
  }).catch(err => {
    console.log(err);
  });
});

module.exports = router;
