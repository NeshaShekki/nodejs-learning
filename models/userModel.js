const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Student = require('./studentModel');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

User.hasOne(Student, { foreignKey: 'userId' });


module.exports = User;
