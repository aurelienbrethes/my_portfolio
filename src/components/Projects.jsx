import './projects.css';
import { useState } from 'react';
import Project from './Project';
import lbm from'./lbm_logo.png';
import liveup from'./liveup_logo.png';
import cogebois from'./cogebois_logo.png';
import bct from'./bct_logo.png';

function Projects() {

  const [close, setClose] = useState(false);

  const myProjects = [
    {titre : "Cogebois", image : cogebois, link : "https://cogebois.com/" , tech : "No-code, Wordpress", description : "Site vitrine pour une entreprise de construction de maisons bois. Réalisé en no-code avec Wordpress ( et le template Avada ). Optimisé SEO à la demande du client"},
    // {titre : "La Belle Miche", image : lbm, tech :"HTML, CSS, Javascript", description : "Premier site réalisé lors de la formation à la wild code school, entièrement en vanilla. Le contenu est bien évidament à prendre au second degré !"},
    {titre : "Blind Crash Test", image : bct, link : "https://aurelienbrethes.github.io/Blind_Crash_Test/", tech :"React.js", description : "Première expérience avec React.js, le but était de créer un site en utilisant l'appel à un API. Nous avons choisi celui de Deezer et avons codé notre propre Blind-test. Pour contourner des soucis de sécurité pas encore réglés, il faut d'abord cliquer sur le lien ci dessous puis sur le bouton 'Request temporary access to the demo server' avant de lancer le Quiz."},
    {titre : "Live Up", image : liveup, link : "https://aurelienbrethes.github.io/Liveup/", tech :"React.js, mySQL", description : "Live Up est le fruit de notre premier Hackathon. En groupe de 6, nous devions créer un site sur le thème de la musique. Nous avons conçu ce projet pour permettre à des utilisateurs en quête d'évènements musicaux proches de chez eux de trouver rapidement ce que proposent organisateurs les plus proches. Site réalisé avec React.js avec création de notre propre API. "},
  ]
  return (
    <div className="carousel_container" id="projects" onClick={() => setClose(true)}>
      <h1>Mes Projets</h1>
      <div className="cards_container">
      {myProjects.map(e=> { 
        return(
          <div>
            <Project 
            titre={e.titre}
            image={e.image}
            tech={e.tech}
            description={e.description}
            close={close}
            link={e.link}
            setClose={setClose}
            />
          </div>
        )         
      })}
      </div>
    </div>
  );
}

export default Projects;