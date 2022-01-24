import './projects.css';
import { useState } from 'react';
import Project from './Project';
// import lbm from'./lbm_logo.png';
import liveup from'../assets/liveup_logo.png';
import cogebois from'../assets/cogebois_logo.png';
import bct from'../assets/bct_logo.png';
import moncarnet from "../assets/moncarnet_logo.png";
import manomano from "../assets/manomano_logo.png";

const myProjects = [
  {
  titre : "Cogebois",
  date : "09/2020",
  image : cogebois, 
  link : "https://cogebois.com/" ,
  github : ["", ""],
  tech : "No-code, Wordpress",
  description : "Site vitrine pour une entreprise de construction de maisons bois. Réalisé en no-code avec Wordpress ( et le template Avada ). Optimisé SEO à la demande du client"
  },
  // {titre : "La Belle Miche", image : lbm, tech :"HTML, CSS, Javascript", description : "Premier site réalisé lors de la formation à la wild code school, entièrement en vanilla. Le contenu est bien évidament à prendre au second degré !"},
  {
  titre : "Blind Crash Test",
  date : "11/2021",
  image : bct,
  github : ["https://github.com/aurelienbrethes/Blind_Crash_Test", ""],
  link : "https://marie5060.github.io/Blind-Crash-Test/",
  tech :"React.js",
  description : "Première expérience avec React.js, le but était de créer un site en utilisant l'appel à un API. Nous avons choisi celui de Deezer et avons codé notre propre Blind-test."
  },
  {
  titre : "Live Up (Hackathon)",
  date : "11/2021",
  image : liveup,
  github : ["https://github.com/aurelienbrethes/Liveup", "https://github.com/aurelienbrethes/hackathon_liveUp_back"],
  link : "https://aurelienbrethes.github.io/Liveup/",
  tech :"React.js, mySQL",
  description : "Live Up est le fruit de notre premier Hackathon. En groupe de 6, nous devions créer un site sur le thème de la musique en seulement 30h (sans sommeil évidemment). Nous avons conçu ce projet pour permettre à des utilisateurs en quête d'évènements musicaux proches de chez eux de trouver rapidement ce que proposent les organisateurs les plus proches. Site réalisé avec React.js avec création de notre propre API. La limite de temps imposée explique que le site n'est pas terminé, et que la propreté du code laisse à désirer sur certaines parties. Nous feront mieux au prochain ! "
  },
  {
    titre : "ManoMano (Hackathon)",
    date : "01/2022",
    image : manomano, 
    link : "" ,
    github : ["https://github.com/aurelienbrethes/hackathon_manomano_front", "https://github.com/matthieudubo/hackathon_manomano_back"],
    tech : "ReactJs, SCSS, Express, NodeJs, MySQL",
    description : "Deuxième Hackathon de notre formation à la WCS, sponsorisé par ManoMano ! Notre mission, proposer une fonctionnalité sur leur marketplace afin d'améliorer l'expérience utilisateur, le tout en 48h. Nous avons choisi d'implémenter un raccourci pour qu'un professionnel qui se fournit souvent chez ManoMano puisse refaire la même commande facilement. Nous étions jugé sur la fonctionnalité et non le design, ni le responsive."
    },
  {
    titre : "Mon Carnet",
    date : "12/2021",
    image : moncarnet, 
    link : "" ,
    github : ["https://github.com/Jimmyganci/moncarnet-frontend", "https://github.com/Jimmyganci/moncarnet-backend"],
    tech : "ReactJs, Tailwind, TypeScript, Express, NodeJs, MySQL, Prisma",
    description : "Troisième et dernier projet de notre formation à la WCS, porté à la demande d'un vrai client. Notre mission : Créer une application full-stack afin de digitaliser le carnet d'entretien de notre véhicule. A la demande du client, la verion particulier est en mobile-first alors que la version professionnelle est en desktop-first. Ce projet est en cours."
    },
]

function Projects() {

  const [close, setClose] = useState(false);

  return (
    <div className="carousel_container" id="projects" onClick={() => setClose(true)}>
      <h1>Mes Projets</h1>
      <section className="cards_container">
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
            github={e.github}
            date={e.date}
            />
          </div>
        )         
      })}
      </section>
    </div>
  );
}

export default Projects;