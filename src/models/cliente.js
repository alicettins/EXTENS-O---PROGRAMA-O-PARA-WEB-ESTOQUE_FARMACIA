const Sequelize = require('sequelize');
const db = require('../db');

const Cliente = db.define('cliente', {
    registro_cliente: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    numero_telefone: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Cliente;
