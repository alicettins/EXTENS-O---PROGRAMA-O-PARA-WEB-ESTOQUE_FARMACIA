const Produto = require('../models/produto');

async function listarProdutosView(req, res) {
    try {
        const produtos = await Produto.findAll();
        res.render('produto/produto-listar.html', { produtos });
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        res.status(500).send('Erro ao buscar produtos');
    }
}

function produtoCadastroView(req, res) {
    res.render('produto/produto-novo.html');
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
            data_saida: req.body.data_saida,
            data_entrada: req.body.data_entrada
        };
        
        await Produto.create(novoProduto);
        res.redirect('/listar_produto');
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
        res.render('produto/produto-editar.html', { produto });
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
        
        produto.nome = req.body.nome;
        produto.descricao = req.body.descricao;
        produto.preco = req.body.preco;
        produto.quantidade_minima = req.body.quantidade_minima;
        produto.quantidade_em_estoque = req.body.quantidade_em_estoque;
        produto.data_validade = req.body.data_validade;
        produto.data_saida = req.body.data_saida;
        produto.data_entrada = req.body.data_entrada;
        
        await produto.save();
        res.redirect('/listar_produto');
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        res.status(500).send('Erro ao atualizar produto');
    }
}

async function excluirProduto(req, res) {
    try {
        const produto = await Produto.findByPk(req.params.id);
        if (!produto) {
            return res.status(404).send('Produto não encontrado');
        }
        
        await produto.destroy();
        res.redirect('/listar_produto');
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
        res.render('produto/produto-detalhes.html', { produto });
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
    excluirProduto,
    detalhesProduto
};
