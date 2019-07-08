const { Model } = require('../Model')
const Department = require('./Department')

class User extends Model {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    return {
      department: {
        relation: Model.BelongsToOneRelation,
        modelClass: Department,
        join: {
          from: 'users.departmentId',
          to: 'departments.id'
        }
      }
    }
  }
}

module.exports = User;
