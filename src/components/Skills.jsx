import './skills.css';
import js from './js.png';
import mysql from './mysql.png';
import vanilla from './vanilla.png';
import react from './react.png';
import nodejs from './nodejs.png';
import github from './github.png';
import trello from './trello.png';
import vscode from './vscode.png';
import postman from './postman.png';


function Skills() {
  return (
    <div className="skills_container" id="skills">
      <h1>Technologies utilisées</h1>
      <div className="column_container">
        <aside className="aside_container">
          <h2>Front-end</h2>
          <div className="logo_container">
            <img src={vanilla} alt="vanilla" />
            <img src={react} alt="react" />
          </div>
        </aside>
        <aside className="aside_container">
          <h2>Back-end</h2>
          <div className="logo_container">
            <img src={js} alt="js" />
            <img src={mysql} alt="mysql" />
            <img src={nodejs} alt="node js" />
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