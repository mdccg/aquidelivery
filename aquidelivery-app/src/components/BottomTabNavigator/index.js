import { Link } from 'react-router-dom';
import './styles.css';

import Home from './../../assets/icons/Home';
import Note from './../../assets/icons/Note';
import User from './../../assets/icons/User';
import ColumnsSolid from './../../assets/icons/ColumnsSolid';

function Tab({ rota, icone = <></>, children }) {
  return (
    <Link to={rota} className="tab">
      {icone}
      <span>{children}</span>
    </Link>
  );
}

function BottomTabNavigator() {
  return (
    <div className="bottom-tab-navigator">
      <Tab rota="/" icone={<Home />}>Home</Tab>
      <Tab rota="/cardapio" icone={<ColumnsSolid />}>Cardápio</Tab>
      <Tab rota="/pedidos" icone={<Note />}>Pedidos</Tab>
      <Tab rota="/conta" icone={<User />}>Conta</Tab>

    </div>
  );
}

export default BottomTabNavigator;