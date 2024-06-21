const Sequelize = require('sequelize');
const db = require('../db');

const EntradaEstoque = db.define('entrada_estoque', {
    id_produto: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    lote: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantidade_total: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    localizacao_estoque: {
        type: Sequelize.STRING,
        allowNull: true
    },
    data_entrada: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
});

module.exports = EntradaEstoque;
