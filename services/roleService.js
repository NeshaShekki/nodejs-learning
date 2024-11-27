const Role = require('../models/roleModel');
const User = require('../models/userModel');
const UserRole = require('../models/userRoleModel');

exports.getAllRoles = async () => {
    return await Role.findAll();
};

exports.getRoleById = async (id) => {
    return await Role.findByPk(id);
};

exports.createRole = async (roleData) => {
    return await Role.create(roleData);
};

exports.updateRole = async (id, roleData) => {
    const role = await Role.findByPk(id);
    if (role) {
        return await role.update(roleData);
    }
    return null;
};

exports.deleteRole = async (id) => {
    const role = await Role.findByPk(id);
    if (role) {
        await role.destroy();
        return true;
    }
    return false;
};

exports.assignRole = async ({userId, roleId}) => {
    console.log(userId, roleId);
    const user = await User.findByPk(userId);
    console.log(user)
    const role = await Role.findByPk(roleId);
    if (user && role) {
        const userRole = await UserRole.create({userId, roleId});
        return userRole;
    }
}