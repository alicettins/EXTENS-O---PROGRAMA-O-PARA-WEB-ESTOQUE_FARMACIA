const express = require('express');
const router = express.Router();
const transacaoController = require('../controllers/transacaoController');

router.post('/cadastrar_transacao', transacaoController.cadastrarTransacao);
router.get('/listar_transacoes', transacaoController.listarTransacoes);
router.get('/editar_transacao/:id', transacaoController.exibirFormularioEdicao);
router.post('/atualizar_transacao/:id', transacaoController.atualizarTransacao);
router.post('/excluir_transacao/:id', transacaoController.excluirTransacao);
router.get('/detalhes_transacao/:id', transacaoController.detalhesTransacao);

module.exports = router;
