const express = require('express');
const conectarDB = require('./config/db');

//creando el servidor
const app = express();

//conectar db
conectarDB();

//habilitar express.json
app.use(express.json({extended: true}))

//puerto app
const PORT = process.env.PORT || 4000;

//importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));

//arrancar la app
app.listen(PORT, () => {
    console.log(PORT)
})