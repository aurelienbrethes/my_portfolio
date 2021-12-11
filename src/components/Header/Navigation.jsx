import './navigation.css';

function Navigation({showLinks}) {

  return (
       <ul className= { showLinks? 'navlist' : 'navbar'}>
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
  );
}

export default Navigation;

