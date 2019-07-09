'use strict'

const router = require('express').Router();
const db = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const users = await db.models.User.query().eager('department')
    if(!users) {
      next(new Error('No Users found!'))
    }
    res.send(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const user = await db.models.User
      .query()
      .findById(req.params.id)
      .eager('department')
      // .join('departments', 'users.departmentId', 'departments.id')
    console.log(user);
    res.send(user);
  } catch (err) {
    next(err)
  }
})

module.exports = router;