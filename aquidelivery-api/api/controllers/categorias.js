const Categoria = require('./../models/Categoria');

module.exports = app => {
  const controller = {};

  controller.listarTodasCategorias = (req, res) => {
    Categoria.find({}, function(err, result) {
      if(err) res.status(500).json(err);
      
      res.status(200).json(result);
    });
  }

  controller.listarCategoriaEspecifica = (req, res) => {
    const { id } = req.params;

    Categoria.findById(id, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(200).json(result);
    });
  }

  controller.cadastrarNovaCategoria = (req, res) => {
    const { nome } = req.body;

    const tupla = { nome };

    Categoria.create(tupla, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(201).json(result);
    });
  }

  controller.atualizarCategoria = (req, res) => {
    const { id } = req.params;

    const { nome } = req.body;

    const tupla = { nome };

    const queryOptions = { useFindAndModify: false };

    Categoria.findByIdAndUpdate(id, { $set: tupla }, queryOptions, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(200).send('Categoria atualizada com êxito.');
    });
  }

  controller.deletarCategoria = (req, res) => {
    const { id } = req.params;

    const queryOptions = { useFindAndModify: false };

    // TODO remover todas refeições cadastradas com esta categoria

    Categoria.findByIdAndDelete(id, queryOptions, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(200).send('Categoria deletada com êxito.');
    });
  }

  return controller;
}