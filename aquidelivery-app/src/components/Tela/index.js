import './styles.css';

function Tela({ className = '', children }) {
  return (
    <div className="tela-background">
      <div className={`tela ${className}`}>
        {children}
      </div>
    </div>
  );
}

export default Tela;