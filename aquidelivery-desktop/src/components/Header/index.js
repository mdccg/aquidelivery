import { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './styles.css';

function Aba({ to = '/', children }) {
  const atual = new RegExp(`${to}`, 'g').test(window.location.pathname);

  return (
    <Link className={'redondinho ' + (atual ? 'atual' : '') + ' header-aba'} to={to}>
      <span>{children}</span>
    </Link>
  );
}

function Header({ location }) {
  useEffect(() => {}, [location]);

  return (
    <div className="header">
      <Aba to="/principal">Principal</Aba>
      <Aba to="/produtos">Produtos</Aba>
      <Aba to="/financeiro">Financeiro</Aba>
      <Aba to="/configuracoes">Configurações</Aba>
    </div>
  );
}

export default withRouter(props => <Header {...props} />);