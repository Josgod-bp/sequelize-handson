const sequelize = require('../config/database');
const Department = require('./department.model');
const Role = require('./role.model');
const Employee = require('./employee.model');

// Relaciones
Employee.belongsTo(Department, { foreignKey: 'departmentId' });
Department.hasMany(Employee, { foreignKey: 'departmentId' });

Employee.belongsTo(Role, { foreignKey: 'roleId' });
Role.hasMany(Employee, { foreignKey: 'roleId' });

module.exports = {
  sequelize,
  Department,
  Role,
  Employee
};
