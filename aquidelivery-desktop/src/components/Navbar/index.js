import './styles.css';

function Navbar({ children }) {
  return (
    <div className="noselect navbar">
      {children}
    </div>
  );
}

export default Navbar;