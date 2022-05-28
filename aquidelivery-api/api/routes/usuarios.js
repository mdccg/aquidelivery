module.exports = app => {
  const controller = app.controllers.usuarios;

  app.route('/api/v1/usuarios')
    .get(controller.listarTodosUsuarios)
    .post(controller.cadastrarNovoUsuario);
  
  app.route('/api/v1/usuarios/Id/:id')
    .get(controller.listarUsuarioEspecifico)
    .put(controller.atualizarUsuario)
    .delete(controller.deletarUsuario);
}