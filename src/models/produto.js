// src/models/produto.js
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
        type: Sequelize.STRING(50),
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    quantidade_minima: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    quantidade_estoque: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    preco: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0.0
    },
    data_validade: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    data_entrada: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    data_saida: {
        type: Sequelize.DATE,
        allowNull: true,
    },
});

module.exports = Produto;
