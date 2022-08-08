var express = require('express');
var router = express.Router();
const db = require('../aa/db'); //引入封装的db模块
/* GET users listing. */
router.post('/', function (req, res, next) {

  db.insert({ table: 'department_add', datas: req.body }).then(resT => {
    
    console.log(resT);
    if(resT.affectedRows == 1){
      res.send(resT);
    }
  }).catch(err => {
    console.log(err);
  });
});

module.exports = router;
