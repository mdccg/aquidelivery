import { useState, useEffect } from 'react';
import './styles.css';

import DualRing from './../../assets/icons/DualRing';
import RightArrow from './../../assets/icons/RightArrow';
import ShoppingBasket from './../../assets/icons/ShoppingBasket';

import Qtdficador from './../../components/Qtdficador';

import { toMoney } from 'vanilla-masker';

function ModalComprarProduto({
  setAberto,
  produto: { 
    _id,
    nome,
    ingredientes = [],
    adicionais = [],
    tamanhos = [],
    valor,
    imagem,
    categoria = {}
  }
}) {
  const [comprando, setComprando] = useState(false);
  
  const [tamanho, setTamanho] = useState({});

  const [adicionaisSelecionados, setAdicionaisSelecionados] = useState([]);

  const [qtd, setQtd] = useState(1);
  const [qtdMax, setQtdMax] = useState(1);

  const [valorTotal, setValorTotal] = useState(0);

  function comprar() {
    setComprando(true);

    console.table(adicionaisSelecionados);
    console.table(adicionais);
  }

  function iniciarAdicionaisSelecionados() {
    let adicionaisSelecionados = adicionais.slice();

    adicionaisSelecionados.map(adicional => {
      adicional.qtd = 0;
      return adicional;
    });

    setAdicionaisSelecionados(adicionaisSelecionados);
  }

  function atualizarQtdAdicionaisSelecionados(qtd, index) {
    let _adicionaisSelecionados = [...adicionaisSelecionados];

    _adicionaisSelecionados[index]['qtd'] = qtd;
    
    setAdicionaisSelecionados(_adicionaisSelecionados);
  }

  function handleTamanho(event) {
    let index = event.target.value;
    setTamanho(index ? tamanhos[index] : {});
  }

  function getValorTotal() {
    let valorTotal = 0;

    if(JSON.stringify(tamanhos) === '[]') 
      valorTotal = qtd * valor;
    
    if(JSON.stringify(tamanho) !== '{}')
      valorTotal = qtd * tamanho.valor;

    setValorTotal(Number(valorTotal).toFixed(2));
  }

  function printfValorTotal() {
    if(!valorTotal)
      return 'R$ --,--';
    else
      return toMoney(valorTotal, { unit: 'R$' });
  }

  function getQtdMax() {
    setQtdMax(10); // TODO back-end aqui
  }

  useEffect(() => {
    iniciarAdicionaisSelecionados();
    getQtdMax();
  }, []);

  useEffect(() => {
    getValorTotal();
  }, [tamanho, qtd]);

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
          {imagem ? <img src={imagem} alt={nome} /> : <div style={{ height: '16px' }}></div>}
        </div>
        
        <div className="dados">
          <span className="nome">{nome}</span>
          <span className="ingredientes">
            {ingredientes.map(ingrediente => ingrediente.nome).join(', ')}
          </span>
        </div>

        <div className="dados form-qtd">
          {JSON.stringify(tamanhos) !== '[]' ? (
            <>
              <select name="tamanho" onChange={handleTamanho}>
                <option disabled selected value="">
                  Selecione um tamanho
                </option>

                {tamanhos.map((tamanho, index) => (
                  <option value={index}>{tamanho.tamanho}</option>
                ))}
              </select>

              <div style={{ height: '16px' }}>
                </div>
            </>
          ) : <></>}

          {JSON.stringify(tamanho) !== '{}' && JSON.stringify(adicionais) !== '[]' ? (
            <>
              <span>Selecione os adicionais.</span>
              
              <div className="adicionais">
                {adicionais.map((adicional, index) => (
                  <div key={adicional._id} className="adicional">
                    <div className="adicional-nome">
                      <span>{adicional.nome}</span>
                    </div>

                    <div className="adicional-qtdficador">
                      <Qtdficador
                        qtdMin={0} qtdMax={1}
                        qtd={adicionaisSelecionados[index]['qtd']}
                        setQtd={_qtd => atualizarQtdAdicionaisSelecionados(_qtd, index)} />
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : <></>}

          <label htmlFor="qtd">
            Quantidade <span className="red-dwarf-star-nasa">*</span>
          </label>

          <Qtdficador qtd={qtd} setQtd={setQtd} qtdMax={qtdMax} />
        </div>
        
        <div className="dados footer">
          <span className="valor-total">{printfValorTotal()}</span>

          <div onClick={comprando ? null : comprar} className="btn-comprar noselect">
            {comprando ? <DualRing /> : (
              <>
                <ShoppingBasket />
                <span>Comprar</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalComprarProduto;