const Sequelize = require('sequelize');
const db = require('../db');

const Transacao = db.define('transacao', {
    id_transacao: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    tipo_transacao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_hora_transacao: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    produtos_comprados: {
        type: Sequelize.STRING,
        allowNull: true
    },
    quantidade_itens: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    valor_total: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});

module.exports = Transacao;
