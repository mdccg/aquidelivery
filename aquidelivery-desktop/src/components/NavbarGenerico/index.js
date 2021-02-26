import Navbar from './../../components/Navbar';
import NavItem from './../../components/NavItem';
import NavSection from './../../components/NavSection';

function NavbarGenerico({ sections }) {
  return (
    <Navbar>
      {sections.map(({ title, items }) => (
        <NavSection key={title} title={title}>
          {items.map(({ to, ico, span }) => (
            <NavItem key={to} to={to} ico={ico}>{span}</NavItem>
          ))}
        </NavSection>
      ))}
    </Navbar>
  );
}

export default NavbarGenerico;