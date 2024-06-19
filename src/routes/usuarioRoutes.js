const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.indexView);
router.get('/criar_conta', usuarioController.criarContaView);
router.post('/cadastrar', usuarioController.cadastrarUsuario);
router.get('/listar_usuario', usuarioController.listarUsuarios);
router.get('/:id/usuario', usuarioController.buscarUsuarioPorId);
router.get('/:id/editar_usuario', usuarioController.buscarUsuarioPorId); 
router.put('/:id/atualizar_usuario', usuarioController.atualizarUsuario);
router.delete('/:id/delete_usuario', usuarioController.deletarUsuario);
router.get('/:id/detalhes_usuario', usuarioController.detalhesUsuario); 
module.exports = router;
