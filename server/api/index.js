'use strict'

const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/departments', require('./departments'));

router.use((req, res, next) => {
  const err = new Error('Yep, this is the api route, but please add the appropriate subroute!')
  err.status = 404
  next(err)
})


module.exports = router;