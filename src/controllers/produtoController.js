const Produto = require('../models/produto');

function produtoCadastroView(req, res) {
    res.render('produto_cadastro.html');
}

function listarProdutosView(req, res) {
    Produto.findAll().then(produtos => {
        res.render('produtos.html', { produtos });
    }).catch(err => {
        console.log(err);
        res.status(500).send('Erro ao listar produtos');
    });
}

function cadastrarProduto(req, res) {
    const { nome, descricao, quantidade, preco, data_validade, data_entrada, data_saida } = req.body;
    const novoProduto = new Produto({
        nome,
        descricao,
        quantidade_minima: quantidade,
        quantidade_estoque: quantidade,
        preco,
        data_validade,
        data_entrada,
        data_saida
    });

    novoProduto.save().then(() => {
        res.redirect('/produtos?cadastrar_produto=true');
    }).catch((err) => {
        console.error(err);
        res.redirect('/produtos?cadastrar_produto=false');
    });
}

module.exports = {
    produtoCadastroView,
    listarProdutosView,
    cadastrarProduto
};
