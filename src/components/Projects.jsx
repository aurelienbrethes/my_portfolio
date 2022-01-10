import './projects.css';
import { useState } from 'react';
import Project from './Project';
// import lbm from'./lbm_logo.png';
import liveup from'../assets/liveup_logo.png';
import cogebois from'../assets/cogebois_logo.png';
import bct from'../assets/bct_logo.png';

function Projects() {

  const [close, setClose] = useState(false);

  const myProjects = [
    {
    titre : "Cogebois",
    image : cogebois, link : "https://cogebois.com/" ,
    tech : "No-code, Wordpress",
    description : "Site vitrine pour une entreprise de construction de maisons bois. Réalisé en no-code avec Wordpress ( et le template Avada ). Optimisé SEO à la demande du client"
    },
    // {titre : "La Belle Miche", image : lbm, tech :"HTML, CSS, Javascript", description : "Premier site réalisé lors de la formation à la wild code school, entièrement en vanilla. Le contenu est bien évidament à prendre au second degré !"},
    {
    titre : "Blind Crash Test",
    image : bct,
    link : "https://marie5060.github.io/Blind-Crash-Test/",
    tech :"React.js",
    description : "Première expérience avec React.js, le but était de créer un site en utilisant l'appel à un API. Nous avons choisi celui de Deezer et avons codé notre propre Blind-test."
    },
    {
    titre : "Live Up",
    image : liveup,
    link : "https://aurelienbrethes.github.io/Liveup/",
    tech :"React.js, mySQL",
    description : "Live Up est le fruit de notre premier Hackathon. En groupe de 6, nous devions créer un site sur le thème de la musique en seulement 30h (sans sommeil évidemment). Nous avons conçu ce projet pour permettre à des utilisateurs en quête d'évènements musicaux proches de chez eux de trouver rapidement ce que proposent les organisateurs les plus proches. Site réalisé avec React.js avec création de notre propre API. La limite de temps imposée explique que le site n'est pas terminé, et que la propreté du code laisse à désirer sur certaines parties. Nous feront mieux au prochain ! "
    },
  ]
  return (
    <div className="carousel_container" id="projects" onClick={() => setClose(true)}>
      <h1>Mes Projets</h1>
      <div className="cards_container">
      {myProjects.map((e, index)=> {
        return(
          <div key={index}>
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