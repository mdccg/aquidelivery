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

import cardapio from './../../tmp/cardapio'; // TODO substituir

function Cardapio() {
  const [pesquisa, setPesquisa] = useState('');

  const [acai, setAcai] = useState([]);
  const [pizzas, setPizzas] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [esfihas, setEsfihas] = useState([]);
  const [lanches, setLanches] = useState([]);

  const [aberto, setAberto] = useState(false);

  const [produto, setProduto] = useState({});

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
    // TODO back-end aqui
    // let url = `/rota?pesquisa=${pesquisa}`;

    setAcai(cardapio['açaí']);
    setPizzas(cardapio['pizzas']);
    setBebidas(cardapio['bebidas']);
    setEsfihas(cardapio['esfihas']);
    setLanches(cardapio['lanches']);
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

        {/* <Acordeao titulo="Teste">
          <div className="lista">
            {Array(9).fill(cardapio.lanches[0]).map((lanche, indice) => <Produto key={indice} {...lanche} />)}
          </div>
        </Acordeao> */}

        <Acordeao titulo="Lanches">
          <div className="lista">
            {retornaLista(lanches)}
          </div>
        </Acordeao>

        <Acordeao titulo="Pizzas">
          <div className="lista">
            {retornaLista(pizzas)}
          </div>
        </Acordeao>
        
        <Acordeao titulo="Esfihas">
          <div className="lista">
            {retornaLista(esfihas)}
          </div>
        </Acordeao>
        
        <Acordeao titulo="Açaí">
          <div className="lista">
            {retornaLista(acai)}
          </div>
        </Acordeao>
        
        <Acordeao titulo="Bebidas">
          <div className="lista">
            {retornaLista(bebidas)}
          </div>
        </Acordeao>

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
        <ModalComprarProduto setAberto={setAberto} produto={produto} />
      </Modal>
    </>
  );
}

export default Cardapio;