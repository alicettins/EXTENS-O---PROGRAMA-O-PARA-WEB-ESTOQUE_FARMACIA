const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');

// Rotas para funcionários
router.get('/listar_funcionarios', funcionarioController.indexView);
router.get('/funcionario-novo', funcionarioController.criarContaView);
router.post('/cadastrar_funcionario', funcionarioController.cadastrarFuncionario);
router.get('/funcionarios/:id/editar', funcionarioController.exibirFormularioEdicao);
router.post('/funcionarios/:id/editar', funcionarioController.atualizarFuncionario);
router.get('/funcionarios/:id/excluir', funcionarioController.exibirConfirmacaoExclusao);
router.post('/funcionarios/:id/excluir', funcionarioController.excluirFuncionario);
router.get('/funcionarios/:id/detalhes', funcionarioController.detalhesFuncionario);

module.exports = router;
