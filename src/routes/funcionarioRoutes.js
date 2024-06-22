const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');

router.get('/listar_funcionarios', funcionarioController.listarFuncionarios);
router.get('/funcionario-novo', funcionarioController.criarContaView); // Rota para exibir formulário de novo funcionário
router.post('/funcionario-novo', funcionarioController.cadastrarFuncionario);
router.get('/funcionarios/:id/detalhes', funcionarioController.exibirDetalhesFuncionario);
router.get('/funcionarios/:id/editar', funcionarioController.exibirFormularioEdicao);
router.post('/funcionarios/:id/editar', funcionarioController.atualizarFuncionario);
router.get('/funcionarios/:id/excluir', funcionarioController.exibirConfirmacaoExclusao);
router.post('/funcionarios/:id/excluir', funcionarioController.excluirFuncionario);

module.exports = router;
