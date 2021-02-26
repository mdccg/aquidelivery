import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import { toMoney } from 'vanilla-masker';

function Footer() {
  const [offsetHeight, setOffsetHeight] = useState(0);

  const [valorTotal, setValorTotal] = useState(0);
  const [carrinho, setCarrinho] = useState([]);

  function getOffsetHeight() {
    const footer = document.querySelector('footer') || document.createElement('a');
    setOffsetHeight(footer.offsetHeight);
  }

  function buscarCarrinho() {
    // TODO back-end aqui
  }

  useEffect(() => {
    document.body.onresize = getOffsetHeight;
    getOffsetHeight();

    buscarCarrinho();
  }, []);

  return (
    <>
      <footer>
        <div className="footer-carrinho">
          <div className="qtd-itens">
            <span>{carrinho.length}</span>
          </div>

          <Link to="/carrinho">Ver carrinho</Link>
        </div>

        <span className="valor-total">{toMoney(Number(valorTotal).toFixed(2), { unit: 'R$' })}</span>
      </footer>

      <div style={{ height: offsetHeight }}>
        </div>
    </>
  );
}

export default Footer;