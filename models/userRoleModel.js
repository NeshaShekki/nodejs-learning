const sequelize = require("../config/dbConfig");
const { Sequelize, DataTypes } = require('sequelize');
const Role = require('./roleModel');
const User = require('./userModel');

const UserRole = sequelize.define('UserRole', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Role,
            key: 'id'
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

User.belongsToMany(Role, { through: UserRole });
Role.belongsToMany(User, { through: UserRole });


module.exports = UserRole;