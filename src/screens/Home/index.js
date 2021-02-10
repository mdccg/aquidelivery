import { useState, useEffect } from 'react';
import './styles.css';

import Whatsapp from './../../assets/icons/Whatsapp';

import Logomarca from './../../assets/images/pedzap-logomarca.png';

import BottomTabNavigator from './../../components/BottomTabNavigator';

function Home() {
  const [usuario, setUsuario] = useState({});

  function buscarUsuario() {  

  }

  useEffect(() => {
    document.title = 'Bom Tempero';

    buscarUsuario();
  }, []);

  return (
    <>
      <div className="home">
        <div>
          <img src={Logomarca} alt="Logomarca" />
        </div>

        <div className="contato">
          <Whatsapp />
          <a href="https://wa.me/+5515998480275" target="_blank" rel="noreferrer">+55 (15) 99848-0275</a>
        </div>

        <div className="horarios">
          <span>
            <strong>Funcionamento</strong>
          </span>
          <span>De Seg à Dom das 08:00 até 23:59</span>
        </div>
      </div>
      
      <BottomTabNavigator />
    </>
  );
}

export default Home;