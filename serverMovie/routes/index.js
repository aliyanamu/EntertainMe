const express = require('express'),
    router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('connected to movie')
});

module.exports = router
