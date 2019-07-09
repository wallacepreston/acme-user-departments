const { Model } = require('../Model');

class Department extends Model {
  static get tableName() {
    return 'departments'
  }
  static get relationMappings() {
    return {
      users: {
        relation: Model.HasManyRelation,
        modelClass: require('./User'),
        join: {
          from: 'departments.id',
          to: 'users.departmentId'
        }
      }
    }
  }
}

module.exports = Department;
