const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Role = sequelize.define('Role', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Role;
