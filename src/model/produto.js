const { Sequelize } = require('sequelize');
const db = require('../db');

const Produto = db.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    data_validade: {
        type: Sequelize.DATE,
        allowNull: false
    },
    data_saida: {
        type: Sequelize.DATE,
        allowNull: false
    },
    data_entrada: {
        type: Sequelize.DATE,
        allowNull: false
    },
    quantidade_minima: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantidade_estoque: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Produto;
