import './styles.css';

function NavSection({ title, children }) {
  return (
    <div className="nav-section">
      <div className="section">
        {children}
      </div>
      
      <div className="title">
        <span>{title}</span>
      </div>
    </div>
  );
}

export default NavSection;