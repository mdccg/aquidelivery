import './styles.css';

function NavSection({ title, children }) {
  return (
    <div className="nav-section">
      <div className="section redondinho">
        {children}
      </div>
      
      <div className="title redondinho">
        <span>{title}</span>
      </div>
    </div>
  );
}

export default NavSection;