const createError = require('http-errors'),
      express = require('express'),
      app = express(),
      bodyParser= require('body-parser')

const indexRouter = require('./routes/index'),
      tvRouter = require('./routes/televisions'),
      movieRouter = require('./routes/movies')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', indexRouter)
app.use('/tv', tvRouter)
app.use('/movies', movieRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // send the error page
  res.status(err.status || 500)
  res.send('error')
})

module.exports = app