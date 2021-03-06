const express = require('express'),
    router = express.Router(),
    { list, insert, update, remove } = require('../controllers/televisions')

/* GET televisions listing. */
router
  .get('/', list)

  .post('/', insert)

  .put('/:id', update)

  .delete('/:id', remove)

module.exports = router
