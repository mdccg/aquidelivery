module.exports = app => {
  const controller = app.controllers.carrinhos;

  app.route('/api/v1/carrinhos')
    .get(controller.listarTodosCarrinhos)
    .post(controller.cadastrarNovoCarrinho);

  app.route('/api/v1/carrinhos/Id/:id')
    .get(controller.listarCarrinhoEspecifico)
    .put(controller.atualizarCarrinho)
    .delete(controller.deletarCarrinho);
}