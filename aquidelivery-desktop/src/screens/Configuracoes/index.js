import './styles.css';

import Nav from './../../components/Nav';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import Background from './../../components/Background';

function Configuracoes() {
  return (
    <>
      <Header />
      <div className="aba configuracoes">
        <Nav.Configuracoes />
        <Background />
      </div>
      <Footer />
    </>
  );
}

export default Configuracoes;