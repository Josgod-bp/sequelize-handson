const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Employee = sequelize.define('Employee', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  salary: {
    type: DataTypes.FLOAT
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Employee;
