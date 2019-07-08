const { knex, Model } = require('./Model');
const Department = require('./models/Department');
const User = require('./models/User');

module.exports = {
  knex,
  Model,
  models: {
    Department,
    User,
  },
}