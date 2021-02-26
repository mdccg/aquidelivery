import './styles.css';

function Titulo({ icone = <></>, children }) {
  return (
    <div className="titulo">
      {icone}
      <span>{children}</span>
    </div>    
  );
}

export default Titulo;