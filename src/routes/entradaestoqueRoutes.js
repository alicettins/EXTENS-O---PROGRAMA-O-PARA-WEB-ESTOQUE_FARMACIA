const express = require('express');
const router = express.Router();
const entradaEstoqueController = require('../controllers/entradaestoqueController');

router.post('/cadastrar_entrada', entradaEstoqueController.cadastrarEntrada);
router.get('/listar_entradas', entradaEstoqueController.listarEntradas);

module.exports = router;
