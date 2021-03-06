import "./skills.css";
import js from "../assets/js.png";
import mysql from "../assets/mysql.png";
import vanilla from "../assets/vanilla.png";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import github from "../assets/github.png";
import trello from "../assets/trello.png";
import vscode from "../assets/vscode.png";
import postman from "../assets/postman.png";
import typescript from "../assets/typescript.png";
import tailwind from "../assets/tailwind.png";
import figma from "../assets/figma.jpg";
import prisma from "../assets/prisma.jpg";
import nextjs from "../assets/next-js.svg";

function Skills() {
  return (
    <section className="skills_container" id="skills">
      <h1>Technologies utilisées</h1>
      <div className="column_container">
        <aside className="aside_container">
          <h2>Front-end</h2>
          <div className="logo_container">
            <img src={vanilla} id="vanilla" alt="vanilla" />
            <img src={react} alt="react" />
            <img src={nextjs} alt="nextjs" />
            <img src={typescript} alt="typescript" />
            <img src={tailwind} alt="tailwind" />
          </div>
        </aside>
        <aside className="aside_container">
          <h2>Back-end</h2>
          <div className="logo_container">
            <img src={js} alt="js" />
            <img src={mysql} alt="mysql" />
            <img src={nodejs} alt="node js" id="nodejs" />
            <img src={typescript} alt="typscript" />
            <img src={prisma} alt="prisma" />
          </div>
        </aside>
        <aside className="aside_container">
          <h2>Outils</h2>
          <div className="logo_container">
            <img src={vscode} alt="vscode" />
            <img src={postman} alt="postman" />
            <img src={trello} alt="trello" />
            <img src={github} alt="github" />
            <img src={figma} alt="figma" />
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Skills;
