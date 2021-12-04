import './home.css';
import logo from './logo_homepage.gif';
import HomeButton from './HomeButton';

function Home() {

  const homeButtons = [
    { id:1, labelButton : "A Propos", buttonLink : "#about"},
    { id:2, labelButton : "Mes Projets", buttonLink : "#projects"},
    { id:3, labelButton : "Mes Skills", buttonLink : "#skills"},
    { id:4, labelButton : "Contactez-moi", buttonLink : "#contact"}
  ]
  
  return (
    <div className="home_container" id="home">
      <img src={logo} alt="aurelien brethes logo" />
      <nav className="buttons_container">
        {homeButtons.map( e =>
          <a key={e.id} href={e.buttonLink}>
            <HomeButton key={e.id} labelButton={e.labelButton}/>
          </a>
            )}
      </nav>      
    </div>
  );
}

export default Home;