import './header.css';
import logo from './logo_header.gif';
import {useState} from 'react';
import Burger from './Burger';
import Navigation from './Navigation';

function Header({wheel}) {

  const [showLinks, setShowLinks] = useState(false);

  // Créer un composant burger
  // créer un composant navigation
  // faire apparaitre le burger en media querie
  // appliquer une classe liste ou navbar en fonction de showLinks dans le parent

  return (
    <div className={wheel ? "header_container" : "displayNone"}>
      <a href="#home">
        <img src={logo} alt="aurelien brethes logo" id="logo_header" />
      </a>
      <Navigation className="navigation_component" showLinks={showLinks}/>
      <Burger showLinks={showLinks} setShowLinks={setShowLinks} className="burger_component" />
    </div>
  );
}

export default Header;

