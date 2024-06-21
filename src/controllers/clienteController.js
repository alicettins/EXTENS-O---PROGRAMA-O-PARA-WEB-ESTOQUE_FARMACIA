const Cliente = require('../models/cliente');

function listarClientes(req, res) {
    Cliente.findAll()
        .then((clientes) => {
            res.render('cliente/cliente-listar.html', { clientes });
        })
        .catch((err) => {
            res.json(err);
        });
}

function exibirDetalhes(req, res) {
    const registro_cliente = req.params.registro_cliente;
    Cliente.findByPk(registro_cliente)
        .then((cliente) => {
            if (!cliente) {
                res.status(404).send('Cliente não encontrado');
            } else {
                res.render('cliente/cliente-detalhes.html', { cliente });
            }
        })
        .catch((err) => {
            res.json(err);
        });
}

function exibirFormularioEdicao(req, res) {
    const registro_cliente = req.params.registro_cliente;
    Cliente.findByPk(registro_cliente)
        .then((cliente) => {
            if (!cliente) {
                res.status(404).send('Cliente não encontrado');
            } else {
                res.render('cliente/cliente-editar.html', { cliente });
            }
        })
        .catch((err) => {
            res.json(err);
        });
}

function atualizarCliente(req, res) {
    const registro_cliente = req.params.registro_cliente;
    const { nome, endereco, email, numero_telefone } = req.body;
    
    Cliente.update({ nome, endereco, email, numero_telefone }, { where: { registro_cliente } })
        .then(() => {
            res.redirect(`/clientes/${registro_cliente}/detalhes`);
        })
        .catch((err) => {
            res.json(err);
        });
}

function excluirCliente(req, res) {
    const registro_cliente = req.params.registro_cliente;
    
    Cliente.destroy({ where: { registro_cliente } })
        .then(() => {
            res.redirect('/clientes');
        })
        .catch((err) => {
            res.json(err);
        });
}

function exibirFormularioNovo(req, res) {
    res.render('cliente/cliente-novo.html');
}

function cadastrarCliente(req, res) {
    const { registro_cliente, nome, endereco, email, numero_telefone } = req.body;
    
    Cliente.create({ registro_cliente, nome, endereco, email, numero_telefone })
        .then(() => {
            res.redirect('/clientes');
        })
        .catch((err) => {
            res.json(err);
        });
}

module.exports = {
    listarClientes,
    exibirDetalhes,
    exibirFormularioEdicao,
    atualizarCliente,
    excluirCliente,
    exibirFormularioNovo,
    cadastrarCliente
};
