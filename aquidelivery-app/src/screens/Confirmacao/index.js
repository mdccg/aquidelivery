import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import Check from './../../assets/icons/Check';
import Padlock from './../../assets/icons/Padlock';
import DualRing from './../../assets/icons/DualRing';
import RightArrow from './../../assets/icons/RightArrow';

import Tela from './../../components/Tela';
import Titulo from './../../components/Titulo';
import Footer from './../../components/Footer';

import isTelefone from './../../functions/isTelefone';

import { toPattern } from 'vanilla-masker';

function Confirmacao() {
  const [confirmando, setConfirmando] = useState(false);

  const [codigo, setCodigo] = useState('');
  const [telefone, setTelefone] = useState('');
  
  function confirmar() {
    if(!codigo) {
      alert('Código não informado.');
      return;
    }

    const regExp = new RegExp(/^\d{3}-\d{3}$/);

    if(!regExp.test(codigo)) {
      alert('Código mal formatado.');
      return;
    }

    setConfirmando(true);

    setTimeout(function() {

      setConfirmando(false);
    }, 2e3);
  }

  function enviarSms() {
    alert('SMS enviado para ' + telefone + ' com êxito!');
  }

  function handleChange(event) {
    let { value } = event.target;
    setCodigo(toPattern(value, '999-999'));
  }

  function buscarTelefone() {
    let params = buscarParametros();
    
    if(!params['telefone']) {
      alert('Número de telefone não informado.');
      window.location = '/login';
      return;
    }

    let telefone = toPattern(params['telefone'], '+99 (99) 99999-9999');

    if(!isTelefone(telefone)) {
      alert('Número de telefone mal formatado.');
      window.location = '/login';
      return;
    }

    setTelefone(telefone);
  }

  function buscarParametros() {
    try {
      let params = {};
  
      window.location.href
        .split('?')[1]
        .split('&')
        .map(param => {
          let [key, value] = param.split('=');
          params[key] = value;
          return param;
        });
      
      return params;

    } catch(err) {
      return ({});
    
    }
  }

  useEffect(() => {
    document.title = 'Confirmação da conta | Bom Tempero';
    buscarTelefone();
  }, []);

  return (
    <>
      <Tela className="confirmacao">
        <Titulo icone={<Padlock />}>Confirmação</Titulo>

        <span>
          Você pode solicitar seu código para o telefone <strong>{telefone}</strong>, por mensagem SMS ou através do WhatsApp, escolha como deseja receber esta código clicando nos botões abaixo:
        </span>

        <div className="codigos">
          <a
            className="botao"
            href="https://wa.me/+5515991395141?text=Quero%20receber%20meu%20c%C3%B3digo."
            rel="noreferrer"
            target="_blank">
            Solicitar código por WhatsApp
          </a>
          <div className="botao" onClick={enviarSms}>Solicitar código por SMS</div>
        </div>

        <form>
          <label htmlFor="codigo">
            Código <span className="red-dwarf-star-nasa">*</span>
          </label>
          <input
            type="text"
            name="codigo"
            value={codigo}
            inputMode="numeric"
            placeholder="___-___"
            onChange={handleChange} />

          <span className="instrucao">Caso não receba o código, verifique o seu número, se tem sinal, se a linha está funcionando, ou tente reiniciar seu aparelho.</span>
        </form>

        <div className="botoes noselect">
          <Link className="botao voltar" to="/login">
            <RightArrow />
            <span>Voltar</span>
          </Link>

          <div style={{ width: '32px' }}>
            </div>

          <button className="botao confirmar" disabled={confirmando} onClick={confirmar}>
            {confirmando ? <DualRing className="loading" /> : <><span>Confirmar</span><Check /></>}
          </button>
        </div>
      </Tela>

      <Footer />
    </>
  );
}

export default Confirmacao;