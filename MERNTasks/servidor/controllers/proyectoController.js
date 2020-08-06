const Proyecto = require("../models/Proyecto");
const { validationResult } = require("express-validator");

exports.crearProyecto = async (req, res) => {
    //Resvisar si hay errores
    const errores = validationResult(req);

    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    try {
        //crear un nuevo proyecto
        const proyecto = new Proyecto(req.body);
        //guardar el creador vis jwt
        proyecto.creador = req.usuario;
        //guardamos el proyecto
        proyecto.save();
        res.json(proyecto);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.obtenerProyectos = async (req, res) => {
    //Resvisar si hay errores
    const errores = validationResult(req);

    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }
    try {
        const proyectos = await Proyecto.find({ creador: req.usuario.id }).sort({ creado: -1 });
        res.json({ proyectos });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarProyecto = async (req, res) => {
    //Resvisar si hay errores
    const errores = validationResult(req);

    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }
    const { nombre } = req.body;
    const nuevoProyecto = {};

    if (nombre) {
        nuevoProyecto.nombre = nombre;
    }

    try {
        //revisar el ID

        //si el proyecto existe o no

        //verificar el creador del proyecto

        //actualizar el proyecto
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
