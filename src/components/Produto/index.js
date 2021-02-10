import './styles.css';

import PlusSolid from './../../assets/icons/PlusSolid';

import { toMoney } from 'vanilla-masker';

function Produto({ nome, ingredientes = [], tamanhos = [], valor, imagem }) {
  return (
    <div className="produto">
      <div className="produto-tronco">
        <div className="produto-frame">
          {imagem ? <img src={imagem} alt={nome} /> : <></>}
        </div>

        <div className="produto-corpo">
          <span className="produto-nome">{nome}</span>
          <span className="produto-ingredientes">{ingredientes.join(', ')}</span>
          
          <div className="produto-tamanhos">
            {tamanhos.map((tamanho, indice) => (
              <div key={indice} className="produto-tamanho">
                <span className="produto-nome">{tamanho.tamanho}</span>
                <span className="produto-valor">{toMoney(Number(tamanho.valor).toFixed(2), { unit: 'R$' })}</span>
              </div>
            ))}
          </div>

          {valor ? <span className="produto-valor">{toMoney(Number(valor).toFixed(2), { unit: 'R$' })}</span> : <></>}
        </div>
      </div>
      
      <div className="produto-rodape">
        <PlusSolid />
        <span>Adicionar</span>
      </div>
    </div>
  );
}

export default Produto;