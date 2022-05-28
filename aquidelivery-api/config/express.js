const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('config');
const consign = require('consign');

module.exports = () => {
  const app = express();

  app.use(cors());

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // CONECTANDO AO BANCO DE DADOS
  require('./../database');

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));

  // ENDPOINTS
  consign({ cwd: 'api' })
    .then('data')
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};