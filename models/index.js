const sequelize = require('../config/database');
const Department = require('./department.model');
const Role = require('./role.model');
const Employee = require('./employee.model');
const Project = require('./project.model');

// Relaciones
Employee.belongsTo(Department, { foreignKey: 'departmentId' });
Department.hasMany(Employee, { foreignKey: 'departmentId' });

Employee.belongsTo(Role, { foreignKey: 'roleId' });
Role.hasMany(Employee, { foreignKey: 'roleId' });

//Relacion empleado-proyecto
Project.belongsToMany(Employee, { through: 'EmployeeProjects' });
Employee.belongsToMany(Project, { through: 'EmployeeProjects' });

module.exports = {
  sequelize,
  Department,
  Role,
  Employee,
  Project
};
