import './header.css';
import logo from '../components/logo_header.gif';

function Header({wheel}) {

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
    </div>
  );
}

export default Header;