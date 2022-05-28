const Usuario  = require('./../models/Usuario');
const Endereco = require('./../models/Endereco');

const getUsuario = require('./../functions/getUsuario');

module.exports = app => {
  const controller = {};

  controller.listarTodosUsuarios = (req, res) => {
    const { tipo } = req.query;

    const filterQuery = {};

    if(typeof tipo === 'string')
      filterQuery.tipo = tipo;

    Usuario.find(filterQuery, async function(err, result) {
      if(err) res.status(500).json(err);

      var usuarios = [];
      for(let idUsuario of result) {
        var usuario = await getUsuario(idUsuario);
        usuarios.push(usuario);
      }

      res.status(200).json(usuarios);
    });
  };

  controller.listarUsuarioEspecifico = (req, res) => {
    const { id } = req.params;

    Usuario.findById(id, async function(err, result) {
      if(err) res.status(500).json(err);

      var usuario = await getUsuario(result);

      res.status(200).json(usuario);
    });
  }

  controller.cadastrarNovoUsuario = (req, res) => {
    const { enderecos, nome, cpf, telefone, tipo } = req.body;

    const tupla = { enderecos, nome, cpf, telefone, tipo };

    Usuario.create(tupla, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(201).json(result);
    });
  }

  controller.atualizarUsuario = (req, res) => {
    const { id } = req.params;

    const { enderecos, nome, cpf, telefone, tipo } = req.body;

    const tupla = { enderecos, nome, cpf, telefone, tipo };

    const queryOptions = { useFindAndModify: false };

    Usuario.findByIdAndUpdate(id, { $set: tupla }, queryOptions, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(200).send('Usuário atualizado com êxito.');
    });
  }

  controller.deletarUsuario = (req, res) => {
    const { id: idUsuario } = req.params;

    Usuario.findById(idUsuario, async function(err, result) {
      if(err) res.status(500).json(err);

      const { enderecos } = result;
      for(const endereco of enderecos) {
        await Endereco.findByIdAndDelete(endereco, function(err, result) {
          if(err) res.status(500).json(err);
        });
      }

      Usuario.findByIdAndDelete(idUsuario, function(err, result) {
        if(err) res.status(500).json(err);

        res.status(200).send('Usuário deletado com êxito.');
      });
    });
  }

  return controller;
}