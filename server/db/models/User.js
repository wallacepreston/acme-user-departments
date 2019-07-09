const { Model } = require('../Model')

class User extends Model {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    return {
      department: {
        relation: Model.BelongsToOneRelation,
        modelClass: require('./Department'),
        join: {
          from: 'users.departmentId',
          to: 'departments.id'
        }
      }
    }
  }
}

module.exports = User;
