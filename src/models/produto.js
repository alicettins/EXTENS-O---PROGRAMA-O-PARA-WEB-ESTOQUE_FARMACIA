const Sequelize = require('sequelize');
const db = require('../db');

const Produto = db.define('produtos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: true
    },
    preco: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    quantidade_minima: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantidade_em_estoque: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    data_validade: {
        type: Sequelize.DATE,
        allowNull: false
    },
    data_saida: {
        type: Sequelize.DATE,
        allowNull: true
    },
    data_entrada: {
        type: Sequelize.DATE,
        allowNull: true, // Alterado para permitir null
        defaultValue: Sequelize.NOW // Valor padrão é a data atual
    }
});

module.exports = Produto;
