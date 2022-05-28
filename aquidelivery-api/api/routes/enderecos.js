module.exports = app => {
  const controller = app.controllers.enderecos;

  app.route('/api/v1/enderecos')
    .get(controller.listarTodosEnderecos)
    .post(controller.cadastrarNovoEndereco);

  app.route('/api/v1/enderecos/Id/:id')
    .get(controller.listarEnderecoEspecifico)
    .put(controller.atualizarEndereco)
    .delete(controller.deletarEndereco);
}