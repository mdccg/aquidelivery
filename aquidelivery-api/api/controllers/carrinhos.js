const Carrinho = require('./../models/Carrinho');

const Pedido = require('./../models/Pedido');

const getCarrinho = require('./../functions/getCarrinho');

module.exports = app => {
  const controller = {};

  controller.listarTodosCarrinhos = (req, res) => {
    Carrinho.find({}, async function(err, result) {
      if(err) res.status(500).json(err);
      
      var carrinhos = [];
      for(let carrinho of result) {
        let _carrinho = await getCarrinho(carrinho);
        carrinhos.push(_carrinho);
      }

      res.status(200).json(carrinhos);
    });
  }

  controller.listarCarrinhoEspecifico = (req, res) => {
    const { id: idUsuario } = req.params;

    Carrinho.findOne({ cliente: idUsuario }, async function(err, result) {
      if(err) res.status(500).json(err);

      var carrinho = await getCarrinho(result);

      res.status(200).json(carrinho);
    });

  }

  controller.cadastrarNovoCarrinho = async (req, res) => {
    const { pedidos, cliente } = req.body;

    var valorTotal = 0;

    for(let idPedido of pedidos) {
      await Pedido.findById(idPedido, function(err, result) {
        if(err) res.status(500).json(err);

        valorTotal += (result.valor * result.qtd);
      });
    }

    const carrinho = { pedidos, valorTotal, cliente };

    Carrinho.create(carrinho, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(201).json(result);
    });
  }

  controller.atualizarCarrinho = (req, res) => {
    const { id: idUsuario } = req.params;

    const { idPedido } = req.body;

    Carrinho.findOne({ cliente: idUsuario }, function(err, result) {
      if(err) res.status(500).json(err);

      var indice = result.pedidos.indexOf(idPedido);

      var carrinho = { ...result._doc };

      if(indice === -1)
        carrinho.pedidos.push(idPedido);
      else
        carrinho.pedidos = carrinho.pedidos.filter(value => `${value}` !== `${idPedido}`);

      const queryOptions = { useFindAndModify: false };

      Carrinho.findOneAndUpdate({ cliente: idUsuario }, { $set: carrinho }, queryOptions, function(err, result) {
        if(err) res.status(500).json(err);

        res.status(200).send('Carrinho atualizado com êxito.');
      });
    });
  }

  controller.deletarCarrinho = (req, res) => {
    const { id: idUsuario } = req.params;

    Carrinho.findOne({ cliente: idUsuario }, async function(err, result) {
      if(err) res.status(500).json(err);

      for(let idPedido of result.pedidos)
        await Pedido.findByIdAndDelete(idPedido, { useFindAndModify: false });
      
      Carrinho.findOneAndDelete({ cliente: idUsuario }, { useFindAndModify: false }, function(err, result) {
        if(err) res.status(500).json(err);
  
        res.status(200).send('Carrinho deletado com êxito.');
      });
    });

  }

  return controller;
}