//ruta de tareas
const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');
const auth = require("../middleware/auth");
const { check } = require('express-validator');

//crear una tarea
// api/taeas
router.post('/',
    auth,
    [
        check('nombre', 'El nombre es Obligatorio').not().isEmpty(),
        check('proyecto', 'El nombre del proyecto es Obligatorio').not().isEmpty()
    ],
    tareaController.crearTarea
);

//Obtener las tareas por proyecto
router.get('/',
    auth,
    tareaController.obtenerTareas
);
//Actualisar tarea
router.put('/:id',
    auth,
    tareaController.actualizarTarea
)
module.exports = router;