// app.js 
require('dotenv').config(); // Agrega esta línea al inicio
const express = require('express');
const { sequelize, authenticateDatabase } = require('./database'); // Importar sequelize
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use('/users', userRoutes);

// Autenticación de la base de datos
authenticateDatabase()
    .then(() => {
        return sequelize.sync(); // Sincroniza los modelos con la base de datos
    })
    .then(() => {
        const PORT = process.env.PORT || 3000; // Asigna el puerto 3000 si process.env.PORT no está definido
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Failed to start server:', err);
    });
