const { models } = require('../index');
console.log(models)
const { User, Department } = models;

const seedUsers = [
  {name: 'Preston', departmentId: 2},
  {name: 'Lucius', departmentId: 1},
  {name: 'Sandra', departmentId: 1},
  {name: 'Sammy', departmentId: 3},
]

const seedDepartments = [
  {name: 'HR', id: 1},
  {name: 'Development', id: 2},
  {name: 'IT', id: 3},
]

const seed = async () => {
  try {
    await Promise.all(seedDepartments.map(department => Department.query().insert(department)));
    console.log('Seeding Departments succeeded!');
    await Promise.all(seedUsers.map(user => User.query().insert(user)));
    console.log('Seeding Users succeeded!');
  } catch (err) {
    console.error(err)
  }
}

seed();