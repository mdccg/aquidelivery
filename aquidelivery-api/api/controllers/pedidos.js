const Pedido = require('./../models/Pedido');

module.exports = app => {
  const controller = {};

  controller.listarTodosPedidos = (req, res) => {
    Pedido.find({}, function(err, result) {
      if(err) res.status(500).json(err);
      
      res.status(200).json(result);
    });
  }

  controller.listarPedidoEspecifico = (req, res) => {
    const { id } = req.params;

    Pedido.findById(id, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(200).json(result);
    });

  }

  controller.cadastrarNovoPedido = (req, res) => {
    Pedido.create(req.body, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(201).json(result);
    });
  }

  controller.atualizarPedido = (req, res) => {
    const { id } = req.params;

    const queryOptions = { useFindAndModify: false };

    Pedido.findByIdAndUpdate(id, { $set: req.body }, queryOptions, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(200).send('Pedido atualizado com êxito.');
    });
  }

  controller.deletarPedido = (req, res) => {
    const { id } = req.params;

    const queryOptions = { useFindAndModify: false };

    Pedido.findByIdAndDelete(id, queryOptions, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(200).send('Pedido deletado com êxito.');
    });
  }

  return controller;
}