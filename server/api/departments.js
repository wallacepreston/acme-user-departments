'use strict'

const router = require('express').Router();

router.get('/', async (req, res, next) => {
  res.send('departments GET')
});

module.exports = router;
