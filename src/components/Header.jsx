import './header.css';
import logo from '../components/logo_header.gif';
import {useState} from 'react';

function Header({wheel}) {

  const [showLinks, setShowLinks] = useState(false);

  let active = 'navbar-burger';

  if (showLinks === false) {
    active += ' not-active';
  } else {
    active += ' active';
  }

  // className={showLinks ? "active" : "displayNone"}

  return (
    <div className={wheel ? "header_container" : "displayNone"}>
      <a href="#home">
        <img src={logo} alt="aurelien brethes logo" id="logo_header" />
      </a>
      <ul>
          <li>
            <a href="#home">
              Accueil
            </a>
          </li>
          <li>
            <a href="#about">
              A propos
            </a>
          </li> 
          <li>
            <a href="#projects">
              Mes Projets
            </a>
          </li> 
          <li>
            <a href="#skills">
              Mes Skills
            </a>
          </li> 
          <li>
            <a href="#contact">
              Contactez-moi
            </a>
          </li>     
      </ul>
      <button type="button" className={active} onClick={() => setShowLinks(!showLinks)}>
          <span className="burger-line" />
        </button>
    </div>
  );
}

export default Header;