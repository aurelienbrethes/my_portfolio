import { useState } from 'react';
import './about.css';
// import Inspiration from './Inspiration';

const inspirations = [
  {
    people : "Anthony Bourbon",
    title : "La persévérence",
    story : "Voilà quelques années que je m'intéresse au monde de l'entrepreunariat et donc de la start-up. De tous les grands entrepreuneurs français, celui avec qui je partage le plus de convictions est très certainement Anthony Bourbon. Pourtant, j'ai eu la chance d'avoir un parcours beaucoup plus confortable que le sien. Anthony est fils d'un père alcolique et d'une mère dépressive, il vit dans la rue à l'âge de 16 - 17 ans. Mais plutôt que de se morfondre, il débute sa vie d'entrepreneur d'abord pour survivre, passant de la vente de vêtements à l'import / export, puis à l'immobilier. Il fonde Feed en 2016, start-up dans la food-tech qui propose des repas équilibrés sous formes de barres chocolatées. Aujourd'hui, Feed a évolué et est une réussite totale : 4000 points de vente en Europe, plus de 40M d'euros levés en 3 ans, Feed est devenue le leader incontesté de son marché, portée par Anthony qui véhicule son histoire et sa vision du monde d'aujourd'hui, quitte à en être clivant. Il dénonce notemment la difficulté pour les gens qui sortent de la “norme” d'être pris au sérieux, de se faire financer. Il met en avant la valeur du travail, la combativité, la résilience. Moi, je retiens surtout sa persévérence.",
  },
  {
    people : "Axel Alletru",
    title : "La résilience",
    story : `La première fois que je vois Axel Alletru, c'est lors d'une course de championnat d'Europe de motocross à Lacapelle Marival en 2009. Axel fait parti du top 5 de la catégorie, ce qui le propulsera l'année suivante en championnat du monde, en 2010, année de mes débuts de compétition dans ce même sport (à un modeste niveau régional pour ma part). Lors de cette première année mondiale, Axel est victime d'une lourde chute en course et reste paraplégique, les médecins lui annoncent qu'il ne remarchera jamais, il a alors 20 ans.
    Mais Axel est têtu, et deux ans plus tard, à force de rééducation et à l'aide de prothèses qu'il a lui même confectionnées, Axel se tient debout, et marche. Il se lance en suivant le défi de participer aux JO de Rio en 2016 pour devenir champion paralympique de natation. Après plusieurs années d'entrainements intensifs, son rêve s'effondre à quelques semaines des JO. En effet, il est victime d'une nouvelle classification de dernière minute de la part du CIO, qui soudain le surclasse au milieu de personnes beaucoup moins handicapées que lui, pouvant se servir de leurs jambes. Axel ne parvient pas à faire les minimas qualificatifs, alors qu'il était l'un des favoris pour une médaille dans sa réelle catégorie.
    Aujourd'hui, Axel a retrouvé l'amour des sports mécaniques, puisque cela fait plusieurs années qu'il participe au Paris Dakar en Buggy, spécialement adapté à son handicap, mais au milieu de gens valides. Je continue sans cesse de suivre ses exploits, car pour moi Axel est le modèle ultime de la résilience. Sa mentalité de battant et son courage devraient être un exemple pour tous.`
  },
  {
    people : "Stephen Curry",
    title : "L'audace",
    story : `Stephen Curry est un joueur de Basketball évoluant en NBA depuis 2009. Fils d'un ancien joueur de NBA, Stephen entre dans “la grande ligue” au sein des Golden State Warriors, équipe dans laquelle il évolue toujours aujourd'hui. Le basketball existe depuis longtemps, et même si les changements de règles font quelque peu évoluer le jeu au fil du temps, Stephen va totalement le métamorphoser. 
    En effet, lors de son entrée dans la ligue, les équipes prennent en moyenne 18 tirs à 3 points par match. Du haut de son 1m88 ( c'est petit pour la NBA ! ), Steph va en faire son arme favorite. Il développe une gestuelle parfaite, qui lui permet d'atteindre des pourcentages de réussite jamais vu. Avec un entraineur tout acquis à sa cause depuis 2014, et une équipe construite autour de ce jeu longue distance, Steph Curry est désormais 3 fois champion NBA, mais surtout, il a complètement changé le jeu de toute la NBA actuelle. Capable de scorer depuis n'importe où sur la moitié de terrain adverse, il est aujourd'hui détenteur du plus grand nombre de shoots à 3 points réussis en carrière. Son prédecesseur avait établi ce record en 1300 matchs, il en a fallu un peu moins de 800 à Steph pour le battre. Il est considéré aujourd'hui à l'unanimité comme le plus grand shooteur de l'histoire du Basketball.  Aujourd'hui, les équipes de NBA prennent en moyenne 29 tirs à 3 points par match. “The man who changed the Game"`
  },
  {
    people : "Benjamin Hekimian, dit “Waxx”",
    title : "La bienveillance",
    story : `Voilà quelques années que je suis les performances ainsi que la vie de Waxx sur les réseaux sociaux. Waxx est un amoureux de musique et de NBA (ça nous fait 2 points communs !), et surtout un guitariste hors pair. Il se fait connaitre grâce aux réseaux sociaux, partageant ses compositions, des reprises, entremêlés de messages bienveillants envers toutes et tous. Il lance en 2019 Fanzine, une émission musicale sur Youtube dans laquelle il reçoit de prestigieux invités : de Hoshi à Oxmo Puccino en passant par Chilla, LEJ ou Youssoupha, tous les styles, tous les talents, toutes les générations s’y succèdent. Il se sert aujourd'hui de sa notoriété grandissante pour passer des messages forts. Waxx est un féministe engagé, et dénonce haut et fort toute forme de discrimination. Il prône sans cesse la bienveillance, l'acceptation de chacun, quel qu'il soit. Il anime aujourd'hui sa propre émission sur RTL2 le dimanche après-midi, et je suis persuadé que nous n'avons pas fini d'entendre parler de lui.`
  },    
]


function About() {

  const [index, setIndex] = useState(1);

  const increment = () => {
    index < 3 ? setIndex(index +1) : setIndex(0)
  }; 

  const decrement = () => {
    index > 0 ? setIndex(index -1) : setIndex(3)
  }; 

  return (
    <div className="about_container" id="about">
      <h1>Bienvenue sur mon Portfolio</h1>
      <div className='aside_about_container'>
        <aside id='left'>
          <h2>Moi, en quelques mots</h2>
          <section className="card_container">        
            <p>Ce site a pour but de me présenter brièvement et de référencer tous mes projets. Il sera régulièrement mis à jour, et évoluera au rythme de mon acquisition de compétences. <br />
              Je m'appelle Aurélien Brethes, j'ai 29 ans, et je suis actuellement une formation de développeur web et web mobile au sein de la <a href="https://www.wildcodeschool.com/fr-FR">Wild Code School de Biarritz</a>. De technicien en électronique à technico-commercial, j'ai passé les 10 premières années de ma vie professionnelle à chercher ma voie, accumulant les expériences, aussi variées que formatrices.
              Attiré depuis toujours par le numérique, la programmation et les nouvelles technologies, et après plus d'un an de travail en autodidacte, j'ai décidé de rejoindre une formation sérieuse dans une école renommée afin de compléter mes connaissances pour me lancer à 100% dans ma reconversion. <br />
              Dans le cadre de mon évolution professionnelle, je suis actuellement à la recherche d'un stage de 4 à 6 mois, à partir du 14 Février 2022, en remote ou en présentiel sur le secteur 40/64.
            </p> 
          </section> 
        </aside>
        <aside id='right'>
          <h2>Mes inspirations</h2>
          <p id='inspi_intro'>Parce que je suis persuadé que nous sommes façonnés par celles et ceux qui nous entourent, voici quelques-unes des nombreuses personnes qui m'inspirent au quotidien, et qui, quelque part, représentent des valeurs qui me caractérisent</p>
          <section className='inspi_container'>           
            <div id='inspi_header'>
              <h3>{inspirations[index].people}</h3>
              <div id='span_container'>
                <button className='span' onClick={() => decrement()}>{"<"}</button>
                <button className='span' onClick={() => increment()}>{">"}</button> 
              </div>              
              <p id='inspi_title'>{inspirations[index].title}</p>
            </div>
            <p id='inspi_story'>{inspirations[index].story}</p>       
          </section>                           
        </aside>
      </div>
    </div>
  );
}

export default About;