const express = require('express');
const router = express.Router();
const userController = require('../controllers/User');

// Definir rutas
router.post('/create', userController.create);
router.get('/', userController.findAll);
router.get('/:userId', userController.findOne);
router.put('/:userId', userController.update);
router.delete('/:userId', userController.destroy);

module.exports = router;
