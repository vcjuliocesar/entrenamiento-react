const Tarea = require("../models/Tarea");
const Proyecto = require("../models/Proyecto");
const { validationResult } = require("express-validator");
//Crear una nueva tarea

exports.crearTarea = async (req, res) => {
    //Resvisar si hay errores
    const errores = validationResult(req);

    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    //extraer el pryecto y comprobar si existe
    try {
        const { proyecto } = req.body;

        const existeProyecto = await Proyecto.findById(proyecto);
        if (!existeProyecto) {
            return res.status(404).json({ msg: 'Proyecto no encontrado' });
        }

        //revisar si el proyecto actual pretenece al usuario autenticado
        if (existeProyecto.creador.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No autorizado' });
        }

        //Creamos la tarea
        const tarea = new Tarea(req.body);
        await tarea.save();
        res.json({ tarea });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerTareas = async (req, res) => {
    try {
        const { proyecto } = req.body;

        const existeProyecto = await Proyecto.findById(proyecto);
        if (!existeProyecto) {
            return res.status(404).json({ msg: 'Proyecto no encontrado' });
        }

        //revisar si el proyecto actual pretenece al usuario autenticado
        if (existeProyecto.creador.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No autorizado' });
        }
        //obtener las tareas por proyecto
        const tareas = await Tarea.find({ proyecto });
        res.json({ tareas });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarTarea = async (req, res) => {
    try {
        const { proyecto,nombre,estado } = req.body;

        let tarea = await Tarea.findById(req.params.id);
        if(!tarea){
            return res.status(404).json({ msg: 'No existe la tarea' });
        }

        const existeProyecto = await Proyecto.findById(proyecto);
        //revisar si el proyecto actual pretenece al usuario autenticado
        if (existeProyecto.creador.toString() !== req.usuario.id) {
            return res.status(401).json({ msg: 'No autorizado' });
        }
        //crear un objeto con la nueva información
        const nuevaTarea = {};

        if(nombre){
            nuevaTarea.nombre = nombre;
        }

        if(estado){
            nuevaTarea.estado = estado;
        }

        //Guardar objeto
        tarea = await Tarea.findByIdAndUpdate({_id:req.params.id},nuevaTarea,{new:true});
        res.json({tarea});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}