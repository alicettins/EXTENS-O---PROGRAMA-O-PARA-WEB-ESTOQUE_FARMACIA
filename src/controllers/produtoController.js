const Produto = require('../models/produto');

async function listarProdutosView(req, res) {
    try {
        const produtos = await Produto.findAll();
        res.render('produto.html', { produtos });
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        res.status(500).send('Erro ao buscar produtos');
    }
}

function produtoCadastroView(req, res) {
    res.render('produto-novo.html');
}

async function cadastrarProduto(req, res) {
    try {
        let novoProduto = {
            nome: req.body.nome,
            descricao: req.body.descricao,
            preco: req.body.preco,
            quantidade_minima: req.body.quantidade_minima,
            quantidade_em_estoque: req.body.quantidade_em_estoque,
            data_validade: req.body.data_validade,
        };

        await Produto.create(novoProduto);
        res.redirect('/listar_produto'); // Redireciona para a lista de produtos após o cadastro
    } catch (error) {
        console.error('Erro ao cadastrar produto:', error);
        res.status(500).send('Erro ao cadastrar produto');
    }
}

async function exibirFormularioEdicao(req, res) {
    try {
        const produto = await Produto.findByPk(req.params.id);
        if (!produto) {
            return res.status(404).send('Produto não encontrado');
        }
        res.render('produto-editar.html', { produto });
    } catch (error) {
        console.error('Erro ao buscar produto para edição:', error);
        res.status(500).send('Erro ao buscar produto para edição');
    }
}

async function atualizarProduto(req, res) {
    try {
        const produto = await Produto.findByPk(req.params.id);
        if (!produto) {
            return res.status(404).send('Produto não encontrado');
        }

        // Atualiza apenas os campos modificados
        produto.nome = req.body.nome;
        produto.descricao = req.body.descricao;
        produto.preco = req.body.preco;
        produto.quantidade_minima = req.body.quantidade_minima;
        produto.quantidade_em_estoque = req.body.quantidade_em_estoque;
        produto.data_validade = req.body.data_validade;

        await produto.save();
        res.redirect('/listar_produto'); // Redireciona para a lista de produtos após a atualização
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        res.status(500).send('Erro ao atualizar produto');
    }
}

async function exibirConfirmacaoExclusao(req, res) {
    try {
        const produto = await Produto.findByPk(req.params.id);
        if (!produto) {
            return res.status(404).send('Produto não encontrado');
        }
        res.render('produto-excluir.html', { produto });
    } catch (error) {
        console.error('Erro ao buscar produto para exclusão:', error);
        res.status(500).send('Erro ao buscar produto para exclusão');
    }
}

async function excluirProduto(req, res) {
    try {
        const produto = await Produto.findByPk(req.params.id);
        if (!produto) {
            return res.status(404).send('Produto não encontrado');
        }

        await produto.destroy();
        res.redirect('/listar_produto'); // Redireciona para a lista de produtos após a exclusão
    } catch (error) {
        console.error('Erro ao excluir produto:', error);
        res.status(500).send('Erro ao excluir produto');
    }
}

async function detalhesProduto(req, res) {
    try {
        const produto = await Produto.findByPk(req.params.id);
        if (!produto) {
            return res.status(404).send('Produto não encontrado');
        }
        res.render('produto-detalhes.html', { produto });
    } catch (error) {
        console.error('Erro ao buscar detalhes do produto:', error);
        res.status(500).send('Erro ao buscar detalhes do produto');
    }
}
module.exports = {
    listarProdutosView,
    produtoCadastroView,
    cadastrarProduto,
    exibirFormularioEdicao,
    atualizarProduto,
    exibirConfirmacaoExclusao,
    excluirProduto,
    detalhesProduto
};
