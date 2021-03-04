import './styles.css';

import SgpIco from './../../assets/icons/SgpIco';

function Background() {
  return (
    <div className="background noselect">
      <div className="background-logo">
        <SgpIco />
        <span className="background-logo-span">SGP</span>
      </div>

      <div className="background-slogan">
        <span className="background-slogan-span">Sistema de gestão de pedidos</span>
      </div>
    </div>
  );
}

export default Background;