'use strict'

const router = require('express').Router();

router.get('/', async (req, res, next) => {
  res.send('users GET')
})

module.exports = router;