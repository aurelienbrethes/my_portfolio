import './home.css';
import logo from './aurelien_brethes_logo.gif'

function Home() {
  return (
    <div className="home_container">
      <img src={logo} alt="aurelien brethes logo" />
      <ul className="menu_container">
        <li>
          A Propos
        </li>
        <li>
          Mes Compétences
        </li>
        <li>
          Mes Projets
        </li>
        <li>
          Contactez-moi
        </li>
      </ul>
    </div>
  );
}

export default Home;