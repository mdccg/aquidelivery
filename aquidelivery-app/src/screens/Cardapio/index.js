import { useState, useEffect } from 'react';
import './styles.css';

import ColumnsSolid from './../../assets/icons/ColumnsSolid';

import Tela from './../../components/Tela';
import Modal from './../../components/Modal';
import Titulo from './../../components/Titulo';
import Footer from './../../components/Footer';
import Produto from './../../components/Produto';
import Acordeao from './../../components/Acordeao';
import ModalComprarProduto from './../../components/ModalComprarProduto';

import api from './../../services/api';

function Cardapio() {
  const [pesquisa, setPesquisa] = useState('');

  const [aberto, setAberto] = useState(false);

  const [produto, setProduto] = useState({});
  const [refeicoes, setRefeicoes] = useState({});
  const [categorias, setCategorias] = useState([]);

  function retornaLista(lista) {
    return lista.map(_produto => (
      <Produto
        key={_produto._id}
        setAberto={setAberto}
        setProduto={setProduto}
        produto={_produto} />
    ));
  }

  function pesquisar(event) {
    setPesquisa(event.target.value);
  }

  function buscarDados() {
    var refeicoes = {};
    
    api.get('/categorias')
      .then(async res => {
        let categorias = res.data;
        setCategorias(categorias);

        for(let { _id, nome } of categorias) {
          let url = `/refeicoes?categoria=${_id}`;

          refeicoes[nome] = (await api.get(url)).data;
        }

        setRefeicoes(refeicoes);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    document.title = 'Cardápio | Bom Tempero';
    buscarDados();
  }, []);

  return (
    <>
      <Tela className="cardapio">
        <Titulo icone={<ColumnsSolid />}>Cardápio</Titulo>

        <span className="convite">Vamos lá, navegue pelo nosso cardápio e conheça todas nossas opções, será um imenso prazer servi-lo, o que você deseja?</span>
      
        <input
          type="text" 
          value={pesquisa}
          onChange={pesquisar}
          className="pesquisa"
          placeholder="Digite para buscar..." />

        {Object.keys(refeicoes).map(categoria => (
          <Acordeao key={categoria} titulo={categoria}>
            <div className="lista">
              {retornaLista(refeicoes[categoria])}
            </div>
          </Acordeao>
        ))}
        
        <div style={{ height: '16px' }}>
          </div>

        <div className="tempo-retirada">
          <span>Tempo para retirada 20 à 30 minutos</span>
        </div>
        
        <div className="tempo-retirada">
          <span>Tempo para entrega 30 à 60 minutos</span>
        </div>
      </Tela>
      
      <Footer />

      <Modal open={aberto} setOpen={setAberto}>
        <ModalComprarProduto setAberto={setAberto} produto={{ ...produto }} />
      </Modal>
    </>
  );
}

export default Cardapio;