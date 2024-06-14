const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');

router.get('/', usuarioController.indexView);
router.get('/criar_conta', usuarioController.criarContaView);
router.post('/cadastrar_usuario', usuarioController.cadastrarUsuario);
router.get('/atualizar/:id', usuarioController.atualizarUsuarioView);
router.post('/atualizar/:id', usuarioController.atualizarUsuario);

router.post('/acessar', usuarioController.loginUsuario);

module.exports = router;
