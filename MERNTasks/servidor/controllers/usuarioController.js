const Usuario = require("../models/Usuario");

exports.crearUsuario = async (req,res) => {
    try {
        //crear usuario
        let usuario = new Usuario(req.body);
        //guardar usuario
        await usuario.save();
        //mensaje
        res.send('Usuario Registrado correctamente');
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}