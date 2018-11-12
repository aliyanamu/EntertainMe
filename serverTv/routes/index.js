const express = require('express'),
    router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('connected to television')
});

module.exports = router
