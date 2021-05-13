import './styles.css';

import Nav from './../../components/Nav';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import Background from './../../components/Background';

function Produtos() {
  return (
    <>
      <Header />
      <div className="aba produtos">
        <Nav.Produtos />
        <Background />
      </div>
      <Footer />
    </>
  );
}

export default Produtos;