const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/', produtoController.indexView);
router.get('/criar_conta', produtoController.criarContaView);
router.post('/cadastrar_produto', produtoController.cadastrarProduto);

module.exports = router;
