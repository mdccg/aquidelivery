module.exports = app => {
  const controller = app.controllers.pedidos;

  app.route('/api/v1/pedidos')
    .get(controller.listarTodosPedidos)
    .post(controller.cadastrarNovoPedido);

  app.route('/api/v1/pedidos/Id/:id')
    .get(controller.listarPedidoEspecifico)
    .put(controller.atualizarPedido)
    .delete(controller.deletarPedido);
}