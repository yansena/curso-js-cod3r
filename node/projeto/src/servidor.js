const express = require('express');
const bancoDeDados = require('./bancoDeDados');
const bodyParse = require('body-parser');

const porta = 3003;
const app = express();

app.use(bodyParse.urlencoded({extended: true}))

app.get('/produtos', (req, res) => {
  res.send(bancoDeDados.getProdutos())
});

app.get('/produtos/:id', (req, res) => {
  res.send(bancoDeDados.getProduto(req.params.id))
});

app.post('/produtos', (req, res) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })

  res.send(produto)
});

app.put('/produtos/:id', (req, res) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })

  res.send(produto)
});

app.delete('/produtos/:id', (req, res) => {
  const produto = bancoDeDados.excluirProduto(req.params.id)
  res.send(produto)
});

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`);
});