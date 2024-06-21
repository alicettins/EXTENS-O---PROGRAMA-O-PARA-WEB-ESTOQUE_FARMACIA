const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/listar_produto', produtoController.listarProdutosView);
router.get('/produto-novo', produtoController.produtoCadastroView);
router.post('/produto-novo', produtoController.cadastrarProduto);
router.get('/produtos/:id/editar', produtoController.exibirFormularioEdicao);
router.post('/produtos/:id/editar', produtoController.atualizarProduto);
router.post('/produtos/:id/excluir', produtoController.excluirProduto);
router.get('/produtos/:id/detalhes', produtoController.detalhesProduto);

module.exports = router;
