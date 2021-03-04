import './styles.css';

import Nav from './../../components/Nav';
import Background from './../../components/Background';

function Principal() {
  return (
    <div className="aba principal">
      <Nav.Principal />

      {Array(50).fill(<span>Lacrimosa</span>).map(_value => _value)}

      <Background />
    </div>
  );
}

export default Principal;