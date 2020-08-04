const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

exports.crearUsuario = async (req, res) => {
    //validar si hay errores
    const errores = validationResult(req);
    
    if(!errores.isEmpty()){
        return res.status(400).json({errores:errores.array()});
    }
    //extraer email y password
    const { email, password } = req.body;
    try {
        let usuario = await Usuario.findOne({ email });

        if (usuario) {
            return res.status(400).json({ msg: "El usuario ya existe" });
        }

        //crear usuario
        usuario = new Usuario(req.body);

        //hashear password
        const salt = await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash(password, salt);

        //guardar usuario
        await usuario.save();
        //mensaje
        res.json({ msg: 'Usuario Registrado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: 'Hubo un error' });
    }
}