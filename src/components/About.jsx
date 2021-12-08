import './about.css';
import fleche from '../components/fleche.gif'

function About() {
  return (
    <div className="about_container" id="about">
      <h1>Bienvenue sur mon Portfolio</h1>
      <section className="card_container">        
        <p>Ce site a pour but de me présenter brièvement et de référencer tous mes projets. Il sera régulièrement mis à jour, et évoluera au rythme de mon acquisition de compétences. <br />
          Je m'appelle Aurélien Brethes, j'ai 29 ans, et je suis actuellement une formation de développeur web et web mobile au sein de la <a href="https://www.wildcodeschool.com/fr-FR">Wild Code School de Biarritz</a>. De technicien en électronique à technico-commercial, j'ai passé 10 ans à chercher ma voie, accumulant les expériences, aussi variées que formatrices.
          Attiré depuis toujours par le numérique et les nouvelles technologies, et après un an de travail en autodidacte, j'ai décidé de rejoindre une formation sérieuse dans une école renommée afin de faire de ma nouvelle passion mon futur métier.
        </p>
        <a href="#stage">
          <img src={fleche} alt="fleche vers le bas" />
        </a>        
      </section>
      <span className="card_container" id="stage">
        Dans le cadre de mon évolution professionnelle, je suis actuellement à la recherche d'un stage à partir de Mars 2022 en remote, ou en présentiel sur le secteur 40/64.
      </span>  
    </div>
  );
}

export default About;