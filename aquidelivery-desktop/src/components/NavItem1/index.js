import { Link } from 'react-router-dom';
import './styles.css';

function NavItem({ to = '/', ico, children }) {
  return (
    <Link className="a-nav-item" to={to}>
      <div className="nav-item">
        <img src={ico} alt={children} />
        <span>{children}</span>
      </div>
    </Link>
  );
}

export default NavItem;