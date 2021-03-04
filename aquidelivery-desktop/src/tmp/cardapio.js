import adicionais from './adicionais';

const cardapio = {
  lanches: [
    {
      _id: '6024498003ed1700ed8d2b21',
      nome: 'X-Burguer',
      ingredientes: ['Pão', 'hambúrguer', 'alface', 'tomate', 'milho verde', 'batata palha'],
      tamanhos: [
        { tamanho: 'Médio', valor: 699.99 },
        { tamanho: 'Grande', valor: 799.99 },
        { tamanho: 'Extragrande', valor: 899.99 },
        { tamanho: 'Colossal', valor: 999.99 }
      ],
      imagem: 'https://bomtempero.pedzap.com.br/uploads/itens/126_foto_mini.jpg',
      categoria: { _id: '603faea0bc6536d4dfddd554', nome: 'Lanches' }
    },
    {
      _id: '602449ac5a7512425898a342',
      nome: 'X-Salada',
      ingredientes: ['Pão', 'hambúrguer', 'queijo', 'alface', 'tomate', 'milho verde', 'batata palha'],
      valor: 999.99,
      imagem: 'https://bomtempero.pedzap.com.br/uploads/itens/127_foto_mini.jpg',
      categoria: { _id: '603faea0bc6536d4dfddd554', nome: 'Lanches' }
    },
    {
      _id: '602449b58228dad85e43795d',
      nome: 'X-Tudo',
      ingredientes: ['Pão', 'hambúrguer', 'queijo', 'bacon', 'presunto', 'ovo', 'alface', 'tomate', 'milho verde', 'batata palha'],
      valor: 999.99,
      imagem: 'https://bomtempero.pedzap.com.br/uploads/itens/128_foto_mini.jpg',
      categoria: { _id: '603faea0bc6536d4dfddd554', nome: 'Lanches' }
    }
  ],
  pizzas: [
    {
      _id: '602449bc7b949a2dad87fede',
      nome: 'Alho e Óleo',
      ingredientes: ['Mussarela', 'alho crocante', 'molho de tomate', 'parmesão'],
      tamanhos: [
        { tamanho: 'Médio', valor: 999.99 },
        { tamanho: 'Grande', valor: 999.99 }
      ],
      imagem: 'https://www.bomtempero.me/uploads/itens/129_foto_full.jpg',
      categoria: { _id: '603faeb56187e2f8e4400baa', nome: 'Pizzas' }
    },
    {
      _id: '602449c409c8b290550f646d',
      nome: 'Americana',
      ingredientes: ['Presunto', 'milho', 'catupiry', 'mussarela'],
      tamanhos: [
        { tamanho: 'Médio', valor: 999.99 },
        { tamanho: 'Grande', valor: 999.99 }
      ],
      imagem: 'https://bomtempero.pedzap.com.br/uploads/itens/137_foto_mini.jpg',
      categoria: { _id: '603faeb56187e2f8e4400baa', nome: 'Pizzas' }
    },
    {
      _id: '602449cba8a87e8b620c66c3',
      nome: 'A Moda',
      ingredientes: ['Presunto', 'milho', 'catupiry', 'mussarela'],
      tamanhos: [
        { tamanho: 'Médio', valor: 999.99 },
        { tamanho: 'Grande', valor: 999.99 }
      ],
      imagem: 'https://bomtempero.pedzap.com.br/uploads/itens/138_foto_mini.jpg',
      categoria: { _id: '603faeb56187e2f8e4400baa', nome: 'Pizzas' }
    },
    {
      _id: '602449d22792116e45fb6936',
      nome: 'Mineira',
      ingredientes: ['Frango', 'bacon', 'milho', 'ovos', 'mussarela'],
      tamanhos: [
        { tamanho: 'Médio', valor: 999.99 },
        { tamanho: 'Grande', valor: 999.99 }
      ],
      imagem: 'https://bomtempero.pedzap.com.br/uploads/itens/139_foto_mini.jpg',
      categoria: { _id: '603faeb56187e2f8e4400baa', nome: 'Pizzas' }
    }
  ],
  esfihas: [
    {
      _id: '602449d943e8ccfed40b84a2',
      nome: 'Carne',
      valor: 999.99,
      imagem: 'https://bomtempero.pedzap.com.br/uploads/itens/133_foto_mini.jpg',
      categoria: { _id: '603faec5ffaea98206307902', nome: 'Esfihas' }
    },
    {
      _id: '602449df4849bd7964189c07',
      nome: 'Queijo',
      valor: 999.99,
      imagem: 'https://bomtempero.pedzap.com.br/uploads/itens/134_foto_mini.jpg',
      categoria: { _id: '603faec5ffaea98206307902', nome: 'Esfihas' }
    },
    {
      _id: '602449e6ea3e7c17262a88d5',
      nome: 'Calabresa',
      valor: 999.99,
      imagem: 'https://bomtempero.pedzap.com.br/uploads/itens/135_foto_mini.jpg',
      categoria: { _id: '603faec5ffaea98206307902', nome: 'Esfihas' }
    },
    {
      _id: '602449eec5ea2cdc91e10fb6',
      nome: 'Milho e catupiry',
      valor: 999.99,
      imagem: 'https://bomtempero.pedzap.com.br/uploads/itens/136_foto_mini.jpeg',
      categoria: { _id: '603faec5ffaea98206307902', nome: 'Esfihas' }
    }
  ],
  'açaí': [
    {
      _id: '602449f550aaa9431dd1b2c8',
      nome: 'Tigela açaí',
      adicionais: [...adicionais],
      tamanhos: [
        { tamanho: '300 ml', valor: 999.99 },
        { tamanho: '500 ml', valor: 999.99 }
      ],
      imagem: 'https://www.bomtempero.me/uploads/itens/11637_foto_full.jpg',
      categoria: { _id: '603faed5c27fb548d11d6141', nome: 'Açaí' }
    }
  ],
  bebidas: [
    {
      _id: '602449fd009922a85a3c6142',
      nome: 'Coca-cola',
      valor: 999.99,
      imagem: 'https://bomtempero.pedzap.com.br/uploads/itens/140_foto_mini.jpg',
      categoria: { _id: '603faeef1ff899a2cb238d49', nome: 'Bebidas' }
    },
    {
      _id: '60244a034c3607e129556357',
      nome: 'Fanta',
      valor: 999.99,
      imagem: 'https://bomtempero.pedzap.com.br/uploads/itens/142_foto_mini.jpg',
      categoria: { _id: '603faeef1ff899a2cb238d49', nome: 'Bebidas' }
    },
    {
      _id: '60244a09e887ff584423e423',
      nome: 'Sprite',
      valor: 999.99,
      imagem: 'https://bomtempero.pedzap.com.br/uploads/itens/145_foto_mini.jpg',
      categoria: { _id: '603faeef1ff899a2cb238d49', nome: 'Bebidas' }
    },
    {
      _id: '60244a1031639f4556dd25c5',
      nome: 'Água',
      valor: 999.99,
      imagem: 'https://bomtempero.pedzap.com.br/uploads/itens/143_foto_mini.jpg',
      categoria: { _id: '603faeef1ff899a2cb238d49', nome: 'Bebidas' }
    }
  ]
};

export default cardapio;