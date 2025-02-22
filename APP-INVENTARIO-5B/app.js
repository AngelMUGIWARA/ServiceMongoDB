const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser= require ('body-parser');
const personaRoutes= require('./routes/persona.route');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api/personas',personaRoutes);

//conexión a bd 
mongoose.connect('mongodb+srv://20233tn144:ZwZ4TGJ78xeZZssc@angel.a4fin.mongodb.net/inventario-db?retryWrites=true&w=majority&appName=Angel',{ useNewUrlParser: true, useUnifiedTopology: true })

.then(() =>{
    console.log('Conexión exitosa a la base de datos a MongoDB');
    app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
    })
    .catch((err) => console.log('Error al conectar en MongoDB', err));



