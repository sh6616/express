var express = require('express');
var router = express.Router();
const db = require('../config/db'); //引入封装的db模块
var Result = require('../utils/returnMsg')
/* GET users listing. */
//新增
router.post('/add/', function (req, res, next) {
  db.insert({ table: 'department', datas: req.body }).then(resT => {
    let Res = new Result('', '新增成功')
    Res.success()
    res.send(JSON.stringify(Res));
  }).catch(err => {
    console.log(err);
  });
});
//获取所有列表
router.post('/getList/', function (req, res, next) {
  if (req.body.value == '') {
    //每页数量
    let pageNumber = (Number(req.body.pageNumber) - 1 ) * Number(req.body.pageSize)
    //当前页
    let pageSize = Number(req.body.pageNumber) * Number(req.body.pageSize)
    //数据总数量
    let total = ''
    db.query({ sql: `select * from department`, datas: '' }).then(resT => {
        total = resT.length
    })
    db.query({ sql: `select * from department order by id limit ${pageNumber},${pageSize}`, datas: '' }).then(resT => {
      let Res = new Result(JSON.parse(JSON.stringify(resT)), '')
      Res.success()
      Res.total = total
      res.send(JSON.stringify(Res));
    }).catch(err => {
      console.log(err);
    });
  } else {
    //条件查询单条
    db.query({ sql: `select * from department where name = '${req.body.value}'`, datas: '' }).then(resT => {
      let Res = new Result(JSON.parse(JSON.stringify(resT)), '')
      Res.success()
      res.send(JSON.stringify(Res));
    }).catch(err => {
      console.log(err);
    });
  }
});
//删除
router.post('/delete/', function (req, res, next) {
  let sqlDelate = ''
  if (req.body.id.length == undefined) {
    sqlDelate = 'id=' + req.body.id
  } else if (req.body.id.length > 1) {
    let nums = ''
    for (let i = 0; i < req.body.id.length; i++) {
      nums += req.body.id[i] + ','
    }
    sqlDelate = 'id in (' + nums.substring(0, nums.length - 1) + ')'
  }
  db.delete({ table: 'department', where: sqlDelate }).then(resT => {
    if (resT.affectedRows == 1) {
      let Res = new Result('', '删除成功')
      Res.success()
      res.send(JSON.stringify(Res));
    }
  }).catch(err => {
    console.log(err);
  });
});
//修改
router.post('/edit/', function (req, res, next) {
  let reqData = req.body
  if (reqData.key) {
    delete reqData.key
  }
  db.update({ table: 'department', 'sets': reqData, where: `id=${reqData.id}` }).then(resT => {
    if (resT.affectedRows == 1) {
      let Res = new Result('', '操作成功')
      Res.success()
      res.send(JSON.stringify(Res));
    }
  }).catch(err => {
    console.log(err);
  });
});
//编辑查询单条数据
router.post('/Detailed/', function (req, res, next) {
  db.query({ sql: `select * from department where id = '${req.body.id}'`, datas: '' }).then(resT => {
    let Res = new Result(JSON.parse(JSON.stringify(resT)), '')
    Res.success()
    res.send(JSON.stringify(Res));
  }).catch(err => {
    console.log(err);
  });
});
//禁启用
router.post('/status/', function (req, res, next) {
  db.update({ table: 'department', 'sets': req.body, where: `id=${req.body.id}` }).then(resT => {
    if (resT.affectedRows == 1) {
      let Res = new Result('', '操作成功')
      Res.success()
      res.send(JSON.stringify(Res));
    }
  }).catch(err => {
    console.log(err);
  });
});




module.exports = router;
