var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const driverRouter = require('./src/Driver/routes');
const orderRouter = require('./src/Order/routes');
const orderAllocationRouter = require('./src/OrderAllocation/routes');
const userAuthRouter = require('./src/UserAuth/routes');
const vehicleRouter = require('./src/Vehicle/routes');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const connectDB = require("./src/middleware/dbConfig");

var app = express();

connectDB();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/driver', driverRouter);
app.use('/order', orderRouter);
app.use('/orderAllocation', orderAllocationRouter);
app.use('/userAuth', userAuthRouter);
app.use('/vehicle', vehicleRouter);
app.use('/users', usersRouter);


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
