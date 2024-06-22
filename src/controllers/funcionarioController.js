const Funcionario = require('../models/funcionario');

// Renderizar a página inicial com a lista de funcionários
async function indexView(req, res) {
    try {
        const funcionarios = await Funcionario.findAll();
        res.render('index.html', { funcionarios });
    } catch (error) {
        console.error('Erro ao buscar funcionários:', error);
        res.status(500).send('Erro ao buscar funcionários');
    }
}

// Listar todos os funcionários
async function listarFuncionarios(req, res) {
    try {
        const funcionarios = await Funcionario.findAll();
        res.render('funcionario.html', { funcionarios });
    } catch (error) {
        console.error('Erro ao buscar funcionários:', error);
        res.status(500).send('Erro ao buscar funcionários');
    }
}

// Renderizar formulário para criar novo funcionário
function criarContaView(req, res) {
    res.render('funcionario-novo.html');
}

// Cadastrar um novo funcionário
async function cadastrarFuncionario(req, res) {
    try {
        const { nome, cargo, salario, data_admissao } = req.body;

        await Funcionario.create({ nome, cargo, salario, data_admissao });
        res.redirect('/listar_funcionarios');
    } catch (error) {
        console.error('Erro ao cadastrar funcionário:', error);
        res.status(500).send('Erro ao cadastrar funcionário');
    }
}

// Exibir detalhes de um funcionário específico
async function exibirDetalhesFuncionario(req, res) {
    try {
        const funcionario = await Funcionario.findByPk(req.params.id);
        if (!funcionario) {
            return res.status(404).send('Funcionário não encontrado');
        }
        res.render('funcionario-detalhes.html', { funcionario });
    } catch (error) {
        console.error('Erro ao buscar detalhes do funcionário:', error);
        res.status(500).send('Erro ao buscar detalhes do funcionário');
    }
}

// Renderizar formulário para editar um funcionário
async function exibirFormularioEdicao(req, res) {
    try {
        const funcionario = await Funcionario.findByPk(req.params.id);
        if (!funcionario) {
            return res.status(404).send('Funcionário não encontrado');
        }
        res.render('funcionario-editar.html', { funcionario });
    } catch (error) {
        console.error('Erro ao buscar funcionário para edição:', error);
        res.status(500).send('Erro ao buscar funcionário para edição');
    }
}

// Atualizar os dados de um funcionário
async function atualizarFuncionario(req, res) {
    try {
        const { nome, cargo, salario, data_admissao } = req.body;

        let funcionario = await Funcionario.findByPk(req.params.id);
        if (!funcionario) {
            return res.status(404).send('Funcionário não encontrado');
        }

        funcionario.nome = nome;
        funcionario.cargo = cargo;
        funcionario.salario = salario;
        funcionario.data_admissao = data_admissao;

        await funcionario.save();
        res.redirect('/listar_funcionarios');
    } catch (error) {
        console.error('Erro ao atualizar funcionário:', error);
        res.status(500).send('Erro ao atualizar funcionário');
    }
}

// Exibir confirmação para exclusão de um funcionário
async function exibirConfirmacaoExclusao(req, res) {
    try {
        const funcionario = await Funcionario.findByPk(req.params.id);
        if (!funcionario) {
            return res.status(404).send('Funcionário não encontrado');
        }
        res.render('funcionario-excluir.html', { funcionario });
    } catch (error) {
        console.error('Erro ao buscar funcionário para exclusão:', error);
        res.status(500).send('Erro ao buscar funcionário para exclusão');
    }
}

// Excluir um funcionário do banco de dados
async function excluirFuncionario(req, res) {
    try {
        const funcionario = await Funcionario.findByPk(req.params.id);
        if (!funcionario) {
            return res.status(404).send('Funcionário não encontrado');
        }

        await funcionario.destroy();
        res.redirect('/listar_funcionarios');
    } catch (error) {
        console.error('Erro ao excluir funcionário:', error);
        res.status(500).send('Erro ao excluir funcionário');
    }
}

module.exports = {
    indexView,
    listarFuncionarios,
    criarContaView,
    cadastrarFuncionario,
    exibirDetalhesFuncionario,
    exibirFormularioEdicao,
    atualizarFuncionario,
    exibirConfirmacaoExclusao,
    excluirFuncionario
};
