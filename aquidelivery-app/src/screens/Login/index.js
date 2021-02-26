import { useState, useEffect } from 'react';
import './styles.css';

import Check from './../../assets/icons/Check';
import Padlock from './../../assets/icons/Padlock';
import DualRing from './../../assets/icons/DualRing';

import Tela from './../../components/Tela';
import Titulo from './../../components/Titulo';
import Footer from './../../components/Footer';

import isTelefone from './../../functions/isTelefone';

import { toPattern } from 'vanilla-masker';

function Login() {
  const [logando, setLogando] = useState(false);

  const [telefone, setTelefone] = useState('');

  function handleChange(event) {
    let { value } = event.target;
    setTelefone(toPattern(value, '(99) 99999-9999'));
  }

  function logar(event) {
    event.preventDefault();

    if(!telefone) {
      alert('Número de telefone não informado.');
      return;
    }

    if(!isTelefone('+55 ' + telefone)) {
      alert('Número de telefone mal formatado.');
      return;
    }
    
    setLogando(true);
    
    // TODO back-end aqui
    setTimeout(function() {
      setLogando(false);
      
      let _telefone = '+55' + telefone.replace(/\D/g, '');
      let  pathname = `/login/confirmacao?telefone=${_telefone}`;

      window.location = pathname;
    }, 2e3);
  }

  useEffect(() => {
    document.title = 'Login | Bom Tempero';
  }, []);

  return (
    <>
      <Tela className="login">
        <Titulo icone={<Padlock />}>Login</Titulo>

        <span className="convite">Para fazer o login basta inserir seu número de telefone, faremos a autenticação do seu número através de um código de confirmação que poderá ser enviado por SMS ou pelo WhatsApp.</span>
      
        <form>
          <label htmlFor="telefone">
            Telefone <span className="red-dwarf-star-nasa">*</span>
          </label>

          <input
            type="text"
            name="telefone"
            value={telefone}
            inputMode="numeric"
            placeholder="(__) _____-____"
            onChange={handleChange} />

          <button disabled={logando} onClick={logar}>
            {logando ? <DualRing className="loading" /> : <>Fazer login <Check /></>}
          </button>
        </form>
      </Tela>
      
      <Footer />
    </>
  );
}

export default Login;