const Funcionario = require('../models/funcionario');

function indexView(req, res) {
    res.render('index.html');
}

function criarContaView(req, res) {
    res.render('funcionario-novo.html');
}

async function cadastrarFuncionario(req, res) {
    try {
        let novoFuncionario = {
            nome: req.body.nome,
            cargo: req.body.cargo,
            salario: req.body.salario,
            data_admissao: req.body.data_admissao
        };

        await Funcionario.create(novoFuncionario);
        res.redirect('/listar_funcionarios');
    } catch (error) {
        console.error('Erro ao cadastrar funcionário:', error);
        res.status(500).send('Erro ao cadastrar funcionário');
    }
}

async function listarFuncionarios(req, res) {
    try {
        const funcionarios = await Funcionario.findAll();
        res.json(funcionarios);
    } catch (error) {
        console.error('Erro ao buscar funcionários:', error);
        res.status(500).send('Erro ao buscar funcionários');
    }
}

async function buscarFuncionarioPorId(req, res) {
    try {
        const funcionario = await Funcionario.findByPk(req.params.id);
        if (!funcionario) {
            return res.status(404).send('Funcionário não encontrado');
        }
        res.json(funcionario);
    } catch (error) {
        console.error('Erro ao buscar funcionário por ID:', error);
        res.status(500).send('Erro ao buscar funcionário por ID');
    }
}

async function atualizarFuncionario(req, res) {
    try {
        const funcionario = await Funcionario.findByPk(req.params.id);
        if (!funcionario) {
            return res.status(404).send('Funcionário não encontrado');
        }

        funcionario.nome = req.body.nome;
        funcionario.cargo = req.body.cargo;
        funcionario.salario = req.body.salario;
        funcionario.data_admissao = req.body.data_admissao;

        await funcionario.save();
        res.redirect('/listar_funcionarios');
    } catch (error) {
        console.error('Erro ao atualizar funcionário:', error);
        res.status(500).send('Erro ao atualizar funcionário');
    }
}

async function deletarFuncionario(req, res) {
    try {
        const funcionario = await Funcionario.findByPk(req.params.id);
        if (!funcionario) {
            return res.status(404).send('Funcionário não encontrado');
        }

        await funcionario.destroy();
        res.redirect('/listar_funcionarios');
    } catch (error) {
        console.error('Erro ao deletar funcionário:', error);
        res.status(500).send('Erro ao deletar funcionário');
    }
}

async function detalhesFuncionario(req, res) {
    try {
        const funcionario = await Funcionario.findByPk(req.params.id);
        if (!funcionario) {
            return res.status(404).send('Funcionário não encontrado');
        }
        res.json(funcionario);
    } catch (error) {
        console.error('Erro ao buscar detalhes do funcionário:', error);
        res.status(500).send('Erro ao buscar detalhes do funcionário');
    }
}

module.exports = {
    indexView,
    criarContaView,
    cadastrarFuncionario,
    listarFuncionarios,
    buscarFuncionarioPorId,
    atualizarFuncionario,
    deletarFuncionario,
    detalhesFuncionario
};
