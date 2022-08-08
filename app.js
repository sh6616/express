var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//跨域
var cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//职位管理
var departMent = require('./routes/departMent');

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
app.use(express.urlencoded({extended: false})) // 解析URL-encoded请求

app.use('/', indexRouter);
app.use('/getSms', usersRouter);
//职位管理
app.use('/department/add/', departMent);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
