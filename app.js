const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const users = require('./routes/users');
const drivers = require('./routes/drivers.router');
const products = require('./routes/product.router');
const clients = require('./routes/client.router');
const purchases = require('./routes/purchase.router');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/crm', { useMongoClient: true })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

const app = express();
const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();

}


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
/* turn on CORS */
app.use(allowCrossDomain);
//app.use('/', (req, res, next) => {res.json({message: 'hello'})});
app.use('/', index);
app.use('/users', users);
app.use('/drivers', drivers);
app.use('/products', products);
app.use('/clients', clients);
app.use('/purchases', purchases);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
