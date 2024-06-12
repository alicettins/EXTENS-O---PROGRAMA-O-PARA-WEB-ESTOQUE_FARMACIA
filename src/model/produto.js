const Sequelize = require('sequelize');
const db = require('../db');

const Produto = db.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: true
    },
    preco: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    }
});

module.exports = Produto;
