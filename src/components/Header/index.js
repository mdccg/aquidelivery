import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import MenuButtonOfThreeHorizontalLines from './../../assets/icons/MenuButtonOfThreeHorizontalLines';

import Logomarca from './../../assets/images/pedzap-logomarca.png'; // TODO substituir aqui

function Header() {
  const [offsetHeight, setOffsetHeight] = useState(0);

  function getOffsetHeight() {
    const header = document.querySelector('header');
    setOffsetHeight(header.offsetHeight);
  }

  useEffect(() => {
    document.body.onresize = getOffsetHeight;
    getOffsetHeight();
  }, []);

  return (
    <>
      <header>
        <Link to="/">
          <img src={Logomarca} alt="Logomarca" />
        </Link>

        <div className="botao-menu noselect">
          <MenuButtonOfThreeHorizontalLines />
          <span>Menu</span>
        </div>
      </header>

      <div style={{ height: offsetHeight }}>
        </div>
    </>
  );
}

export default Header;