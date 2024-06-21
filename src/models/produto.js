const Sequelize = require('sequelize');
const db = require('../db');

const Produto = db.define('produto', {
    id_produto: {
        type: Sequelize.STRING,
        primaryKey: true
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
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
});

module.exports = Produto;
