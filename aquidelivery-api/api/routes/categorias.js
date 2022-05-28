module.exports = app => {
  const controller = app.controllers.categorias;

  app.route('/api/v1/categorias')
    .get(controller.listarTodasCategorias)
    .post(controller.cadastrarNovaCategoria);

  app.route('/api/v1/categorias/Id/:id')
    .get(controller.listarCategoriaEspecifica)
    .put(controller.atualizarCategoria)
    .delete(controller.deletarCategoria);
}