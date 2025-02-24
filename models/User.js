const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    nombre: { type: DataTypes.STRING, allowNull: false },
    apellido: { type: DataTypes.STRING, allowNull: false },
    deudaBs: { type: DataTypes.FLOAT, allowNull: true },
    deudaUSD: { type: DataTypes.FLOAT, allowNull: true },
    comentarios: { type: DataTypes.TEXT }
}, {
    timestamps: false
});

module.exports = User;
