const Adicional = require('./../models/Adicional');

module.exports = app => {
  const controller = {};

  controller.listarTodosAdicionais = (req, res) => {
    Adicional.find({}, function(err, result) {
      if(err) res.status(500).json(err);
      
      res.status(200).json(result);
    });
  }

  controller.listarAdicionalEspecifico = (req, res) => {
    const { id } = req.params;

    Adicional.findById(id, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(200).json(result);
    });

  }

  controller.cadastrarNovoAdicional = (req, res) => {
    const { nome, qtd } = req.body;

    const tupla = { nome, qtd };

    Adicional.create(tupla, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(201).json(result);
    });
  }

  controller.atualizarAdicional = (req, res) => {
    const { id } = req.params;

    const { nome, qtd } = req.body;

    const tupla = { nome, qtd };

    const queryOptions = { useFindAndModify: false };

    Adicional.findByIdAndUpdate(id, { $set: tupla }, queryOptions, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(200).send('Adicional atualizado com êxito.');
    });
  }

  controller.deletarAdicional = (req, res) => {
    const { id } = req.params;

    const queryOptions = { useFindAndModify: false };

    // TODO remover adicional das outras refeições cadastradas

    Adicional.findByIdAndDelete(id, queryOptions, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(200).send('Adicional deletado com êxito.');
    });
  }

  return controller;
}