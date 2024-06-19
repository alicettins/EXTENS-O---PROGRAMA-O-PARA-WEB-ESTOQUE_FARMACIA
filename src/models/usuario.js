const Sequelize = require('sequelize');
const db = require('../db');

const Usuario = db.define('usuario', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false
  },
  id_funcionario: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cargo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nome: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
});

module.exports = Usuario;
