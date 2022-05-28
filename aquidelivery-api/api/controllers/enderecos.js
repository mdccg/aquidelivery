const Usuario  = require('./../models/Usuario');
const Endereco = require('./../models/Endereco');

module.exports = app => {
  const controller = {};

  controller.listarTodosEnderecos = (req, res) => {
    Endereco.find(function(err, result) {
      if(err) res.status(500).json(err);

      res.status(200).json(result);
    });
  };

  controller.listarEnderecoEspecifico = (req, res) => {
    const { id } = req.params;

    Endereco.findById(id, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(200).json(result);
    })
  };

  controller.cadastrarNovoEndereco = (req, res) => {
    const { cep, endereco, numero, complemento, bairro, cidade, estado, pontoReferencia } = req.body;
    
    const tupla = { cep, endereco, numero, complemento, bairro, cidade, estado, pontoReferencia };
    
    Endereco.create(tupla, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(201).json(result);
    });
  }

  controller.atualizarEndereco = (req, res) => {
    const { id } = req.params;

    const { cep, endereco, numero, complemento, bairro, cidade, estado, pontoReferencia } = req.body;
    
    const tupla = { cep, endereco, numero, complemento, bairro, cidade, estado, pontoReferencia };
    
    const queryOptions = { useFindAndModify: false };

    Endereco.findByIdAndUpdate(id, { $set: tupla }, queryOptions, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(200).send('Endereço atualizado com êxito.');
    });
  }

  controller.deletarEndereco = (req, res) => {
    const { id: idEndereco } = req.params;

    const filterQuery = { 'enderecos': idEndereco };

    /**
     * Selecionando usuário cujo
     *    endereço será deletado
     */
    Usuario.findOne(filterQuery, function(err, result) {
      if(err) res.status(500).json(err);

      /**
       * Removendo o endereço a ser deletado
       *    do vetor de endereços do usuário
       */
      let { enderecos, _id: idUsuario, nome, cpf, telefone, tipo } = result;
      enderecos = enderecos.filter(value => `${value}` !== `${idEndereco}`);

      const usuario = { enderecos, nome, cpf, telefone, tipo };
      const queryOptions = { useFindAndModify: false };

      //  Atualizando usuário com novo vetor
      Usuario.findByIdAndUpdate(idUsuario, { $set: usuario }, queryOptions, function(err, result) {
        if(err) res.status(500).json(err);

        // Deletando o endereço definitivamente
        Endereco.findByIdAndDelete(idEndereco, function(err, result) {
          if(err) res.status(500).json(err);

          res.status(200).send('Endereço deletado com êxito.');
        })
      });
    });
  }

  return controller;
}