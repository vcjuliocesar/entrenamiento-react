//ruta de usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

//Crear un usuario
router.post('/',usuarioController.crearUsuario);

module.exports = router;