const express = require('express');
const roleController = require('../controllers/roleController');

const router = express.Router();

router.get('/', roleController.getAllRoles);
router.get('/:id', roleController.getRoleById);
router.post('/', roleController.createRole);
router.put('/:id', roleController.updateRole);
router.delete('/:id', roleController.deleteRole);
router.post('/assign', roleController.assignRole);

module.exports = router;