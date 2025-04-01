const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Project = sequelize.define('Project', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    deadline: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports = Project;