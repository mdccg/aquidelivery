import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import Call from './../../assets/icons/Call';
import Tool from './../../assets/icons/Tool';
import Note from './../../assets/icons/Note';
import User from './../../assets/icons/User';
import Whatsapp from './../../assets/icons/Whatsapp';
import ColumnsSolid from './../../assets/icons/ColumnsSolid';
import StarHalfEmpty from './../../assets/icons/StarHalfEmpty';
import ShoppingBasket from './../../assets/icons/ShoppingBasket';

import Marca from './../../assets/images/pedzap-badge.png';
import Logomarca from './../../assets/images/pedzap-logomarca.png';

import theme from './../../styles/theme';

function Rota({ rota, icone = <></>, children }) {
  return (
    <Link className="drawer-rota" to={rota}>
      <div className="drawer-icone">
        {icone}
      </div>

      <span>{children}</span>
    </Link>
  );
}

function CustomDrawerContent() {
  const [aberto, setAberto] = useState(true);
  const [formasPagamento, setFormasPagamento] = useState([]);

  function buscarDados() {
    setAberto(false);
    setFormasPagamento(['Dinheiro', 'Pix', 'Cartão de débito', 'Cartão de crédito - Visa', 'Cartão de crédito - Mastercard', 'Vale - Sodexo refeição']);
  }

  useEffect(() => {
    buscarDados();
  }, []);

  return (
    <div className="drawer">
      <img src={Logomarca} alt="Logomarca" className="drawer-logomarca" />

      <div className="drawer-convite redondinho" style={{ borderColor: aberto ? theme.verdejante : theme.bordeaux }}>
        <span style={{ color: aberto ? theme.verdejante : theme.bordeaux }}>
          Estamos {aberto ? 'abertos' : 'fechados'}
        </span>
      </div>

      <Rota rota="/cardapio" icone={<ColumnsSolid />}>Cardápio</Rota>
      <Rota rota="/carrinho" icone={<ShoppingBasket />}>Carrinho</Rota>
      <Rota rota="/localizacao" icone={<Tool />}>Localização</Rota>
      <Rota rota="/ligar" icone={<Call />}>Ligar</Rota>
      <Rota rota="/whatsapp" icone={<Whatsapp />}>Whatsapp</Rota>
      <Rota rota="/avaliacoes" icone={<StarHalfEmpty />}>Avaliações</Rota>
      <Rota rota="/pedidos" icone={<Note />}>Meus pedidos</Rota>
      <Rota rota="/login" icone={<User />}>Minha conta</Rota>
      <Rota rota="/teste">Teste</Rota>

      <div className="drawer-infos">
        <div className="drawer-info">
          <span>Endereço</span>
          <span>Rua Jose Elias Habice, 25 - Vila Alcala - Porto Feliz/SP</span>
        </div>

        <div className="drawer-info">
          <span>Funcionamento</span>
          <span>De Seg à Dom das 08:00 até 23:59</span>
        </div>

        <div className="drawer-info">
          <span>Formas de pagamento</span>
          <ul>
            {formasPagamento.map((formaPagamento, index) => <li key={index}>{formaPagamento}</li>)}
          </ul>
        </div>
      </div>

      <img src={Marca} alt="Marca" className="drawer-badge" />
    </div>
  );
}

export default CustomDrawerContent;