const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/clientes', clienteController.listarClientes);
router.get('/clientes/:registro_cliente/detalhes', clienteController.exibirDetalhes);
router.get('/clientes/:registro_cliente/editar', clienteController.exibirFormularioEdicao);
router.post('/clientes/:registro_cliente/editar', clienteController.atualizarCliente);
router.post('/clientes/:registro_cliente/excluir', clienteController.excluirCliente);
router.get('/clientes/novo', clienteController.exibirFormularioNovo);
router.post('/clientes/novo', clienteController.cadastrarCliente);

module.exports = router;
