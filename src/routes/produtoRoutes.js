const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/listar_produto', produtoController.listarProdutos);
router.get('/exibir_formulario', produtoController.exibirFormularioCadastro);
router.post('/cadastrar_produto', produtoController.cadastrarProduto);
router.get('/:id/editar_produto', produtoController.exibirFormularioEdicao);
router.put('/:id/atualiza_produto', produtoController.atualizarProduto);
router.delete('/:id/delete', produtoController.excluirProduto);

module.exports = router;
