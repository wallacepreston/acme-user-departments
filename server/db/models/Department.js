const { Model } = require('../Model');
const User = require('./User')

class Department extends Model {
  static get tableName() {
    return 'departments'
  }
  static get relationMappings() {
    return {
      users: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: 'departments.id',
          to: 'users.departmentId'
        }
      }
    }
  }
}

module.exports = Department;
