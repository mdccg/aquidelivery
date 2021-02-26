import { useState } from 'react';
import './styles.css';

import Tela from './../../components/Tela';
import Modal from './../../components/Modal';
import Titulo from './../../components/Titulo';

function Teste() {
  const [aberto, setAberto] = useState(false);
  
  return (
    <Tela>
      <Titulo>Jonas!</Titulo>

      <button onClick={() => setAberto(true)}>Abrir modal</button>

      <Modal open={aberto} setOpen={setAberto}>
        <span>Jonas!</span>
      </Modal>
    </Tela>
  );
}

export default Teste;