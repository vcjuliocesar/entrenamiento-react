const Usuario = require("../models/Usuario");
const bcryptjs = require("bcryptjs");

exports.crearUsuario = async (req,res) => {
    //extraer email y password
    const {email,password} = req.body;
    try {
        let usuario = await Usuario.findOne({email});

        if(usuario){
            return res.status(400).json({msg:"El usuario ya existe"});
        }

        //crear usuario
        usuario = new Usuario(req.body);

        //hashear password
        const salt = await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash(password,salt);
        
        //guardar usuario
        await usuario.save();
        //mensaje
        res.json({msg:'Usuario Registrado correctamente'});
    } catch (error) {
        console.log(error);
        res.status(400).json({msg:'Hubo un error'});
    }
}