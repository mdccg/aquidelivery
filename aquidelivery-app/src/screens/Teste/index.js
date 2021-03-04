import { useState } from 'react';
import './styles.css';

import Tela from './../../components/Tela';
import Modal from './../../components/Modal';
import Titulo from './../../components/Titulo';

function Teste() {
  const [aberto, setAberto] = useState(false);
  
  return (
    <Tela>
      <Titulo>o, Mozart...</Titulo>

      <button onClick={() => setAberto(true)}>Abrir modal</button>

      <Modal open={aberto} setOpen={setAberto}>
        <span>Lacrimosa</span>
      </Modal>
    </Tela>
  );
}

export default Teste;