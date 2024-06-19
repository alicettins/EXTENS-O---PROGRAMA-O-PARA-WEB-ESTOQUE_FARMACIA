const path = require('path');
const Produto = require('../models/produto');

function produtoCadastroView(req, res) {
  res.sendFile(path.join(__dirname, '..', 'views', 'produto_cadastro.html'));
}

function listarProdutosView(req, res) {
  Produto.findAll()
    .then(produtos => {
      res.render('produtos.html', { produtos });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao listar produtos');
    });
}

function cadastrarProduto(req, res) {
  const { nome, descricao, quantidade_minima, quantidade_estoque, preco, data_validade, data_entrada, data_saida } = req.body;
  const novoProduto = {
    nome,
    descricao,
    quantidade_minima,
    quantidade_estoque,
    preco,
    data_validade,
    data_entrada,
    data_saida
  };

  Produto.create(novoProduto)
    .then(() => {
      res.redirect('/produtos?cadastrar_produto=true');
    })
    .catch((err) => {
      console.error(err);
      res.redirect('/produtos?cadastrar_produto=false');
    });
}

function exibirFormularioEdicao(req, res) {
  const produtoId = req.params.id;
  Produto.findByPk(produtoId)
    .then(produto => {
      if (!produto) {
        res.status(404).send('Produto não encontrado');
      } else {
        res.render('produto_edicao.html', { produto });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao buscar produto');
    });
}

function atualizarProduto(req, res) {
  const produtoId = req.params.id;
  const { nome, descricao, quantidade_minima, quantidade_estoque, preco, data_validade, data_entrada, data_saida } = req.body;
  const atualizacaoProduto = {
    nome,
    descricao,
    quantidade_minima,
    quantidade_estoque,
    preco,
    data_validade,
    data_entrada,
    data_saida
  };

  Produto.update(atualizacaoProduto, { where: { id: produtoId } })
    .then((result) => {
      if (result[0] > 0) {
        res.redirect('/produtos/' + produtoId);
      } else {
        res.status(404).send('Produto não encontrado');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erro ao atualizar produto');
    });
}

function excluirProduto(req, res) {
  const produtoId = req.params.id;
  Produto.destroy({ where: { id: produtoId } })
    .then((result) => {
      if (result > 0) {
        res.redirect('/produtos');
      } else {
        res.status(404).send('Produto não encontrado');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erro ao excluir produto');
    });
}

function detalhesProduto(req, res) {
  const produtoId = req.params.id;
  Produto.findByPk(produtoId)
    .then(produto => {
      if (!produto) {
        res.status(404).send('Produto não encontrado');
      } else {
        res.render('produto.html', { produto });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Erro ao buscar produto');
    });
}

module.exports = {
  produtoCadastroView,
  listarProdutosView,
  cadastrarProduto,
  exibirFormularioEdicao,
  atualizarProduto,
  excluirProduto,
  detalhesProduto
};
