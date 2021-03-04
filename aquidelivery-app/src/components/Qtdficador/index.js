import './styles.css';

function Qtdficador({ qtdMin = 1, qtd = 1, setQtd, qtdMax = 10 }) {
  const add = () => setQtd(Number(qtd) + 1);
  const sub = () => setQtd(Number(qtd) - 1);
  
  return (
    <div className="qtdficador">
      <button disabled={qtd <= qtdMin} onClick={sub}>&minus;</button>

      <div className="painel">{qtd}</div>

      <button disabled={qtd >= qtdMax} onClick={add}>&#43;</button>
    </div>
  );
}

export default Qtdficador;