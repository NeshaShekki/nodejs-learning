const roleService = require('../services/roleService');

exports.getAllRoles = async (req, res) => {
    try {
        const roles = await roleService.getAllRoles();
        res.json(roles);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

exports.getRoleById = async (req, res) => {
    try {
        const role = await roleService.getRoleById(req.params.id);
        if (role) {
            res.json(role);
        } else {
            res.status(404).json({ error: 'Role not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createRole = async (req, res) => {
    try {
        const role = await roleService.createRole(req.body);
        res.status(201).json(role);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

exports.updateRole = async (req, res) => {
    try {
        const role = await roleService.updateRole(req.params.id, req.body);
        if (role) {
            res.json(role);
        } else {
            res.status(404).json({ error: 'Role not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteRole = async (req, res) => {
    try {
        const result = await roleService.deleteRole(req.params.id);
        if (result) {
            res.json({ message: 'Role deleted successfully' });
        } else {
            res.status(404).json({ error: 'Role not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.assignRole = async (req, res) => {
    try {
        const result = await roleService.assignRole(req.body);
        res.json(result);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
};

module.exports 