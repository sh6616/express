const express = require('express');
const router = express.Router();

router.get('/testGet', (req, res) => { // 测试get 请求
  returnParams(req.query, res)
})

router.post('/testPost', (req, res) => { // 测试post 请求
  returnParams(req.body, res)
})

function returnParams(data, res) {
  res.json({ code: 1, status: 'S', data: data, msg: '成功' })
}

module.exports = router