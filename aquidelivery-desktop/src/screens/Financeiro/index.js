import './styles.css';

import Nav from './../../components/Nav';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import Background from './../../components/Background';

function Financeiro() {
  return (
    <>
      <Header />
      <div className="aba financeiro">
        <Nav.Financeiro />
        <Background />
      </div>
      <Footer />
    </>
  );
}

export default Financeiro;