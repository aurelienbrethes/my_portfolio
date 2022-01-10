import './skills.css';
import js from '../assets/js.png';
import mysql from '../assets/mysql.png';
import vanilla from '../assets/vanilla.png';
import react from '../assets/react.png';
import nodejs from '../assets/nodejs.png';
import github from '../assets/github.png';
import trello from '../assets/trello.png';
import vscode from '../assets/vscode.png';
import postman from '../assets/postman.png';
import typescript from '../assets/typescript.png';
import tailwind from '../assets/tailwind.png';


function Skills() {
  return (
    <div className="skills_container" id="skills">
      <h1>Technologies utilisées</h1>
      <div className="column_container">
        <aside className="aside_container">
          <h2>Front-end</h2>
          <div className="logo_container">
            <img src={vanilla} id="vanilla" alt="vanilla" />
            <img src={react} alt="react" />
            <img src={typescript} alt="react" />
            <img src={tailwind} alt="react" />
          </div>
        </aside>
        <aside className="aside_container">
          <h2>Back-end</h2>
          <div className="logo_container">
            <img src={js} alt="js"/>
            <img src={mysql} alt="mysql" />
            <img src={nodejs} alt="node js" id="nodejs"/>
            <img src={typescript} alt="react"/>
          </div>
        </aside>
        <aside className="aside_container">
          <h2>Outils</h2>
          <div className="logo_container">
            <img src={vscode} alt="vscode" />
            <img src={postman} alt="postman" />
            <img src={trello} alt="trello" />
            <img src={github} alt="github" />
          </div>
        </aside>
      </div>        
    </div>
  );
}

export default Skills;