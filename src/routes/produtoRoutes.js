const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/listar_produto', produtoController.listarProdutosView);
router.get('/exibir_formularioP', produtoController.produtoCadastroView);
router.post('/cadastrar_produto', produtoController.cadastrarProduto);
router.get('/:id/editar_produto', produtoController.exibirFormularioEdicao);
router.put('/:id/atualiza_produto', produtoController.atualizarProduto);
router.delete('/:id/delete_produto', produtoController.excluirProduto);
router.get('/:id/detalhes_produto', produtoController.detalhesProduto); 
module.exports = router;
