const Pedido = require('./../models/Pedido');
const Usuario = require('./../models/Usuario');

const getCarrinho = async result => {
  try {
    var pedidos = [];
    for(let idPedido of result.pedidos) {
      await Pedido.findById(idPedido, async function(err, result) {
        var pedido = { ...result._doc };
        pedidos.push(pedido);
      });
    }

    var valorTotal = 0;
    for(let pedido of pedidos) {
      valorTotal += (pedido.valor * pedido.qtd);
    }
  
    var cliente = {};
    await Usuario.findById(result.cliente, function(err, result) {
      cliente = result;
    });
  
    var carrinho = { ...result._doc };
    carrinho.valorTotal = valorTotal;
    carrinho.pedidos = pedidos;
    carrinho.cliente = cliente;
  
    return carrinho;

  } catch(err) {
    return err;
    
  }
}

module.exports = getCarrinho;