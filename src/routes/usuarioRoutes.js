const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.listarUsuarios);
router.get('/exibir_cadastrar', usuarioController.exibirFormularioCadastro);
router.post('/cadastrar_usuario', usuarioController.cadastrarUsuario);
router.get('/exibir_formulariologin', usuarioController.exibirFormularioLogin);
router.post('/login', usuarioController.efetuarLogin);
router.get('/logout', usuarioController.efetuarLogout);
router.get('/:id/editar', usuarioController.exibirFormularioEdicao);
router.put('/:id', usuarioController.atualizarUsuario);

module.exports = router;
