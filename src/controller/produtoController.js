const Produto = require('../models/produto');

function listarProdutosView(req, res) {
  Produto.find()
    .then(produtos => {
      res.render('listagem_produtos.html', { produtos });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Erro ao listar produtos');
    });
}

function cadastrarProduto(req, res) {
  const novoProduto = {
    nome: req.body.nome,
    descricao: req.body.descricao,
    preco: req.body.preco
    
  };

  Produto.create(novoProduto)
    .then(() => {
      res.redirect('/produtos?cadastrar_produto=true');
    })
    .catch(err => {
      console.log(err);
      res.redirect('/produtos?cadastrar_produto=false');
    });
}

module.exports = {
  listarProdutosView,
  cadastrarProduto
};
