const Refeicao  = require('./../models/Refeicao');
const Categoria = require('./../models/Categoria');

const getRefeicao = require('./../functions/getRefeicao');

module.exports = app => {
  const controller = {};

  controller.listarTodasRefeicoes = (req, res) => {
    Refeicao.find(req.query, async function(err, result) {
      if(err) res.status(500).json(err);

      var refeicoes = [];
      for(let idRefeicao of result) {
        var refeicao = await getRefeicao(idRefeicao);
        refeicoes.push(refeicao);
      }
      
      res.status(200).json(refeicoes);
    });
  }

  controller.listarRefeicaoEspecifica = (req, res) => {
    const { id } = req.params;

    Refeicao.findById(id, async function(err, result) {
      if(err) res.status(500).json(err);

      var refeicao = await getRefeicao(result);

      res.status(200).json(refeicao);
    });
  }

  controller.cadastrarNovaRefeicao = (req, res) => {
    Refeicao.create(req.body, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(201).json(result);
    });
  }

  controller.atualizarRefeicao = (req, res) => {
    const { id } = req.params;

    const queryOptions = { useFindAndModify: false };

    Refeicao.findByIdAndUpdate(id, { $set: req.body }, queryOptions, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(200).send('Refeição atualizada com êxito.');
    });
  }

  controller.deletarRefeicao = (req, res) => {
    const { id } = req.params;

    const queryOptions = { useFindAndModify: false };

    // TODO deletar a imagem da refeição

    Refeicao.findByIdAndDelete(id, queryOptions, function(err, result) {
      if(err) res.status(500).json(err);

      res.status(200).send('Refeição deletada com êxito.');
    });
  }

  controller.atualizarIngrediente = (req, res) => {
    const { id: idRefeicao } = req.params;

    const { idIngrediente } = req.body;

    Refeicao.findById(idRefeicao, function(err, result) {
      if(err) res.status(500).json(err);

      var refeicao = { ...result._doc };
      var ingredientes = [...refeicao.ingredientes];

      if(ingredientes.map(value => `${value}`).includes(idIngrediente))
        ingredientes = ingredientes.filter(value => `${value}` !== idIngrediente);
      else
        ingredientes.push(idIngrediente);

      refeicao.ingredientes = ingredientes;

      const queryOptions = { useFindAndModify: false };

      Refeicao.findByIdAndUpdate(idRefeicao, { $set: refeicao }, queryOptions, function(err, result) {
        if(err) res.status(500).json(err);

        res.status(200).send('Ingrediente atualizado com êxito.');
      });
    });
  }

  controller.atualizarAdicional = (req, res) => {
    const { id: idRefeicao } = req.params;

    const { idAdicional } = req.body;

    Refeicao.findById(idRefeicao, function(err, result) {
      if(err) res.status(500).json(err);

      var refeicao = { ...result._doc };
      var adicionais = [...refeicao.adicionais];

      if(adicionais.map(value => `${value}`).includes(idAdicional))
        adicionais = adicionais.filter(value => `${value}` !== idAdicional);
      else
        adicionais.push(idAdicional);

      refeicao.adicionais = adicionais;

      const queryOptions = { useFindAndModify: false };

      Refeicao.findByIdAndUpdate(idRefeicao, { $set: refeicao }, queryOptions, function(err, result) {
        if(err) res.status(500).json(err);

        res.status(200).send('Adicional atualizado com êxito.');
      });
    });
  }
  
  controller.atualizarCategoria = (req, res) => {
    const { id: idRefeicao } = req.params;

    const { idCategoria } = req.body;

    Refeicao.findById(idRefeicao, async function(err, result) {
      if(err) res.status(500).json(err);

      var refeicao = { ...result._doc };
      refeicao.categoria = idCategoria;

      const queryOptions = { useFindAndModify: false };

      Refeicao.findByIdAndUpdate(idRefeicao, { $set: refeicao }, queryOptions, function(err, result) {
        if(err) res.status(500).json(err);

        res.status(200).send('Categoria atualizada com êxito.');
      });
    });
  }

  return controller;
}