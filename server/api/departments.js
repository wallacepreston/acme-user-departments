'use strict'

const router = require('express').Router();
const db = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const departments = await db.models.Department.query().eager('users');
    if(!departments) {
      next(new Error('No Departments found!'))
    }
    res.send(departments)
  } catch (err) {
    next(err)
  }

});

router.get('/:id', async (req, res, next) => {
  try {
    const department = await db.models.Department
      .query()
      .findById(req.params.id)
      .eager('users');
    console.log(department);
    res.send(department);
  } catch (err) {
    next(err)
  }
})

module.exports = router;
