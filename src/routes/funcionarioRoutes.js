const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');

router.get('/', funcionarioController.indexView);
router.get('/funcionario-novo', funcionarioController.criarContaView);
router.post('/funcionario-novo', funcionarioController.cadastrarFuncionario);
router.get('/listar_funcionarios', funcionarioController.listarFuncionarios);
router.get('/funcionarios/:id', funcionarioController.buscarFuncionarioPorId);
router.post('/funcionarios/:id/editar', funcionarioController.atualizarFuncionario);
router.post('/funcionarios/:id/deletar', funcionarioController.deletarFuncionario);
router.get('/funcionarios/:id/detalhes', funcionarioController.detalhesFuncionario);

module.exports = router;
