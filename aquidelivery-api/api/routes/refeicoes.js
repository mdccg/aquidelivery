module.exports = app => {
  const controller = app.controllers.refeicoes;

  app.route('/api/v1/refeicoes')
    .get(controller.listarTodasRefeicoes)
    .post(controller.cadastrarNovaRefeicao);

  app.route('/api/v1/refeicoes/Id/:id')
    .get(controller.listarRefeicaoEspecifica)
    .put(controller.atualizarRefeicao)
    .delete(controller.deletarRefeicao);
  
  app.route('/api/v1/refeicoes/ingrediente/Id/:id')
    .put(controller.atualizarIngrediente);
  
  app.route('/api/v1/refeicoes/adicional/Id/:id')
    .put(controller.atualizarAdicional);

  app.route('/api/v1/refeicoes/categoria/Id/:id')
    .put(controller.atualizarCategoria);
}