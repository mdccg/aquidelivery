module.exports = app => {
  const controller = app.controllers.adicionais;

  app.route('/api/v1/adicionais')
    .get(controller.listarTodosAdicionais)
    .post(controller.cadastrarNovoAdicional);

  app.route('/api/v1/adicionais/Id/:id')
    .get(controller.listarAdicionalEspecifico)
    .put(controller.atualizarAdicional)
    .delete(controller.deletarAdicional);
}