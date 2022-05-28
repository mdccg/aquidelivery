const Ingrediente = require('./../models/Ingrediente');

module.exports = app => {
  const controller = {};

  controller.listarTodosIngredientes = (req, res) => {
    Ingrediente.find({}, function(err, result) {
      if(err) res.status(500).json(err);
      
      res.status(200).json(result);
    });
  }

  controller.listarIngredienteEspecifico = (req, res) => {
    const { id } = req.params;

    Ingrediente.findById(id, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(200).json(result);
    });

  }

  controller.cadastrarNovoIngrediente = (req, res) => {
    const { nome, qtd } = req.body;

    const tupla = { nome, qtd };

    Ingrediente.create(tupla, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(201).json(result);
    });
  }

  controller.atualizarIngrediente = (req, res) => {
    const { id } = req.params;

    const { nome, qtd } = req.body;

    const tupla = { nome, qtd };

    const queryOptions = { useFindAndModify: false };

    Ingrediente.findByIdAndUpdate(id, { $set: tupla }, queryOptions, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(200).send('Ingrediente atualizado com êxito.');
    });
  }

  controller.deletarIngrediente = (req, res) => {
    const { id } = req.params;

    const queryOptions = { useFindAndModify: false };

    // TODO remover ingredientes das outras refeições cadastradas

    Ingrediente.findByIdAndDelete(id, queryOptions, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(200).send('Ingrediente deletado com êxito.');
    });
  }

  return controller;
}