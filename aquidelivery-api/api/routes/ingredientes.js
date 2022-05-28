module.exports = app => {
  const controller = app.controllers.ingredientes;

  app.route('/api/v1/ingredientes')
    .get(controller.listarTodosIngredientes)
    .post(controller.cadastrarNovoIngrediente);

  app.route('/api/v1/ingredientes/Id/:id')
    .get(controller.listarIngredienteEspecifico)
    .put(controller.atualizarIngrediente)
    .delete(controller.deletarIngrediente);
}