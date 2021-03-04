import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import MenuButtonOfThreeHorizontalLines from './../../assets/icons/MenuButtonOfThreeHorizontalLines';

import Logomarca from './../../assets/images/pedzap-logomarca.png'; // TODO substituir aqui

import Drawer from './../Drawer';
import CustomDrawerContent from './../CustomDrawerContent';

function Header() {
  const [open, setOpen] = useState(false);
  
  const abrir = () => setOpen(true);
  
  const [offsetHeight, setOffsetHeight] = useState(0);

  function getOffsetHeight() {
    const header = document.querySelector('header') || document.createElement('a');
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

        <div className="botao-menu redondinho noselect" onClick={abrir}>
          <MenuButtonOfThreeHorizontalLines />
          <span>Menu</span>
        </div>
      </header>

      <div style={{ height: offsetHeight }}>
        </div>

      <Drawer open={open} setOpen={setOpen}>
        <CustomDrawerContent />
      </Drawer>
    </>
  );
}

export default Header;