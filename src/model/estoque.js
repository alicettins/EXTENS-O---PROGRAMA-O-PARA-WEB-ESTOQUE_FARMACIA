const Sequelize = require('sequelize');
const db = require('../db');
const Produto = require('./produto');

const Estoque = db.define('estoque', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Estoque.belongsTo(Produto); 
module.exports = Estoque;
