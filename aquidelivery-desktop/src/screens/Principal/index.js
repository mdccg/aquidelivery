import './styles.css';

import Nav from './../../components/Nav';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import Background from './../../components/Background';

function Principal() {
  return (
    <>
      <Header />
      <div className="aba principal">
        <Nav.Principal />
        <Background />
      </div>
      <Footer />
    </>
  );
}

export default Principal;