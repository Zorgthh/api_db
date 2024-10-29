// database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false, // Cambia a true si deseas ver las consultas SQL en la consola
});

// Función para autenticar la conexión a la base de datos
async function authenticateDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

// Exporta la instancia sequelize y la función de autenticación
module.exports = { sequelize, authenticateDatabase };
