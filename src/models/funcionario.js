const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const Funcionario = db.define('funcionario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salario: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    data_admissao: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports = Funcionario;
