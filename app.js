var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//跨域
var cors = require("cors");

//登录
var loginRouter = require('./routes/login');
//注册
var registerRouter = require('./routes/register');


var usersRouter = require('./routes/users');
//职位管理
var departMentRouter = require('./routes/departMent');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//跨域
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // 解析json请求
app.use(express.urlencoded({ extended: false })) // 解析URL-encoded请求

//登录
app.use('/login', loginRouter);
//注册
app.use('/register', registerRouter);

//获取验证码
app.use('/getSms', usersRouter);
//职位管理
app.use('/department', departMentRouter);






// catch 404 and forward to error handler
//应用级别全局中间件
app.use(function (req, res, next) {
  console.log(req.path)
  next(createError(404));
});

// error handler
//错误级中间件
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
