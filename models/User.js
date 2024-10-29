// models/User.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database'); // Asegúrate de que esta ruta sea correcta

const User = sequelize.define('User', {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    // Otras configuraciones del modelo
});

module.exports = User;
