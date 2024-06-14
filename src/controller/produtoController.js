const Produto = require('../model/produto');

function listarProdutosView(req, res) {
    Produto.findAll().then(produtos => {
        res.render('listagem_produtos.html', { produtos });
    }).catch(err => {
        console.log(err);
        res.status(500).send('Erro ao listar produtos');
    });
}

function cadastrarProdutoView(req, res) {
    res.render('cadastro_produto.html');
}

function cadastrarProduto(req, res) {
    const novoProduto = {
        nome: req.body.nome,
        descricao: req.body.descricao,
        preco: req.body.preco,
        data_validade: req.body.data_validade,
        data_saida: req.body.data_saida,
        data_entrada: req.body.data_entrada,
        quantidade_minima: req.body.quantidade_minima,
        quantidade_estoque: req.body.quantidade_estoque
    };

    Produto.create(novoProduto).then(() => {
        res.redirect('/produtos?cadastrar_produto=true');
    }).catch(err => {
        console.log(err);
        res.redirect('/produtos?cadastrar_produto=false');
    });
}

function editarProdutoView(req, res) {
    const produtoId = req.params.id;
    Produto.findByPk(produtoId).then(produto => {
        res.render('edicao_produto.html', { produto });
    }).catch(err => {
        console.log(err);
        res.redirect('/produtos?editar_produto=false');
    });
}

function atualizarProduto(req, res) {
    const produtoId = req.params.id;
    Produto.update({
        nome: req.body.nome,
        descricao: req.body.descricao,
        preco: req.body.preco,
        data_validade: req.body.data_validade,
        data_saida: req.body.data_saida,
        data_entrada: req.body.data_entrada,
        quantidade_minima: req.body.quantidade_minima,
        quantidade_estoque: req.body.quantidade_estoque
    }, {
        where: { id: produtoId }
    }).then(() => {
        res.redirect('/produtos?atualizar_produto=true');
    }).catch(err => {
        console.log(err);
        res.redirect('/produtos?atualizar_produto=false');
    });
}

function excluirProduto(req, res) {
    const produtoId = req.params.id;
    Produto.destroy({
        where: { id: produtoId }
    }).then(() => {
        res.redirect('/produtos?excluir_produto=true');
    }).catch(err => {
        console.log(err);
        res.redirect('/produtos?excluir_produto=false');
    });
}

module.exports = {
    listarProdutosView,
    cadastrarProdutoView,
    cadastrarProduto,
    editarProdutoView,
    atualizarProduto,
    excluirProduto
};
