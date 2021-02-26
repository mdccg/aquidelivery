import { useState, useEffect } from 'react';
import './styles.css';

import RightArrow from './../../assets/icons/RightArrow';
import ShoppingBasket from './../../assets/icons/ShoppingBasket';

import Qtdficador from './../../components/Qtdficador';

import { toMoney } from 'vanilla-masker';

function ModalComprarProduto({ setAberto, produto: { _id, nome, ingredientes = [], tamanhos = [], valor, imagem } }) {
  const [qtd, setQtd] = useState(1);
  const [qtdMax, setQtdMax] = useState(1);

  function getValorTotal() {
    if(!valor)
      return 'R$ --,--';
    else
      return toMoney(Number(valor * qtd).toFixed(2), { unit: 'R$' });
  }

  function getQtdMax() {
    setQtdMax(10);
  }

  useEffect(() => {
    getQtdMax();
  }, []);

  return (
    <div className="modal-comprar-produto">
      <div className="header">
        <div
          className="ico-hitbox"
          style={{ cursor: 'pointer' }}
          onClick={() => setAberto(false)}>
          <RightArrow />
        </div>

        <span>Detalhes</span>

        <div className="ico-hitbox">
          </div>
      </div>
      
      <div className="body">
        <div className="frame">
          {imagem ? <img src={imagem} alt={nome} /> : <></>}
        </div>
        
        <div className="dados">
          <span className="nome">{nome}</span>
          <span className="ingredientes">{ingredientes.join(', ')}</span>
        </div>

        <div className="dados form-qtd">
          <label htmlFor="qtd">
            Quantidade <span className="red-dwarf-star-nasa">*</span>
          </label>

          <Qtdficador qtd={qtd} setQtd={setQtd} qtdMax={qtdMax} />
        </div>
        
        <div className="dados footer">
          <span className="valor-total">{getValorTotal()}</span>

          <div className="btn-comprar">
            <ShoppingBasket />
            <span>Comprar</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalComprarProduto;