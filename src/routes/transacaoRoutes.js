const express = require('express');
const router = express.Router();
const transacaoController = require('../controllers/transacaoController');

router.post('/cadastrar_transacao', transacaoController.cadastrarTransacao);
router.get('/listar_transacoes', transacaoController.listarTransacoes);

module.exports = router;
