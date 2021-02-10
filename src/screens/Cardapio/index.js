import { useState, useEffect } from 'react';
import './styles.css';

import ColumnsSolid from './../../assets/icons/ColumnsSolid';

import Footer from './../../components/Footer';
import Produto from './../../components/Produto';
import Acordeao from './../../components/Acordeao';

import cardapio from './../../tmp/cardapio'; // TODO substituir

function Cardapio() {
  const [pesquisa, setPesquisa] = useState('');

  const [acai, setAcai] = useState([]);
  const [pizzas, setPizzas] = useState([]);
  const [bebidas, setBebidas] = useState([]);
  const [esfihas, setEsfihas] = useState([]);
  const [lanches, setLanches] = useState([]);

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
      <div className="cardapio-background">
        <div className="cardapio">
          <div className="titulo">
            <ColumnsSolid />
            <span>Cardápio</span>
          </div>

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
              {lanches.map((lanche, indice) => <Produto key={indice} {...lanche} />)}
            </div>
          </Acordeao>

          <Acordeao titulo="Pizzas">
            <div className="lista">
              {pizzas.map((pizza, indice) => <Produto key={indice} {...pizza} />)}
            </div>
          </Acordeao>
          
          <Acordeao titulo="Esfihas">
            <div className="lista">
              {esfihas.map((esfiha, indice) => <Produto key={indice} {...esfiha} />)}
            </div>
          </Acordeao>
          
          <Acordeao titulo="Açaí">
            <div className="lista">
              {acai.map((_acai, indice) => <Produto key={indice} {..._acai} />)}
            </div>
          </Acordeao>
          
          <Acordeao titulo="Bebidas">
            <div className="lista">
              {bebidas.map((bebida, indice) => <Produto key={indice} {...bebida} />)}
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
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default Cardapio;