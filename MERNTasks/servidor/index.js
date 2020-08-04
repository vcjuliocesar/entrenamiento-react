const express = require('express');
const conectarDB = require('./config/db');

//crear el servidor
const app = express();

//conectarse a la bd
conectarDB();

//puerto de la app
const PORT = process.env.PORT || 4000;

//arrancar la app
app.listen(PORT,()=>{
    console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})

