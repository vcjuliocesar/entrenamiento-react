const express = require('express');
const conectarDB = require('./config/db');

//crear el servidor
const app = express();

//conectarse a la bd
conectarDB();

//Habilitar express.json
app.use(express.json({extended:true}));

//puerto de la app
const PORT = process.env.PORT || 4000;

//importar rutas
app.use('/api/usuarios',require('./routes/usuarios'));

//arrancar la app
app.listen(PORT,()=>{
    console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})

