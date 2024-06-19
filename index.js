const express = require('express');
const mustacheExpress = require('mustache-express');
const db = require('./src/db');
const app = express();
const produtoRoutes = require('./src/routes/produtoRoutes');
const usuarioRoutes = require('./src/routes/usuarioRoutes');

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/src/views');
app.use(express.urlencoded({ extended: true }));
app.use('/produtos', produtoRoutes);
app.use('/usuarios', usuarioRoutes);

db.sync()
  .then(() => {
    console.log('Banco de Dados conectado');

    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`App rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });
