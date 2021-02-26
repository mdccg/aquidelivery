import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import getNomeSobrenome from './../../functions/getNomeSobrenome';

import _usuario from './../../tmp/usuario'; // TODO substituir

function Footer() {
  const [usuario, setUsuario] = useState({});

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  function getUsuario() {
    setUsuario(_usuario);

    let [nome, sobrenome] = getNomeSobrenome(_usuario.nome).split(' ');
    
    if(sobrenome === 'undefined') sobrenome = '';
    
    setNome(nome);
    setSobrenome(sobrenome);
  }

  useEffect(() => {
    getUsuario();
  }, []);

  return (
    <div className="footer">
      <div className="usuario">
        <small>
          Usuário: <strong>{nome} {sobrenome}</strong> <Link to="/">{usuario.tipo}</Link>
        </small>

        <div className="divider">
          </div>

        <small>
          Registrado para: <strong>{nome}</strong>
          {sobrenome ? ` - ${sobrenome} /` : ``}
        </small>
      </div>

      <div className="copyright">
        <small>&copy; Copyright 2021 Aquidelivery</small>
      </div>
    </div>
  );
}

export default Footer;