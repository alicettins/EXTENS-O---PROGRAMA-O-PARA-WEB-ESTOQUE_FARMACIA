const express = require('express');
const router = express.Router();
const produtoController = require('../controller/produtoController');

router.get('/', produtoController.listarProdutosView);
router.get('/cadastrar', produtoController.cadastrarProdutoView);
router.post('/cadastrar', produtoController.cadastrarProduto);
router.get('/editar/:id', produtoController.editarProdutoView);
router.post('/editar/:id', produtoController.atualizarProduto);
router.post('/excluir/:id', produtoController.excluirProduto);

module.exports = router;
