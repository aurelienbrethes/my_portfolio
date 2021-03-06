import "./contact.css";
import cv from "../assets/aurelienbrethes.pdf";

function Contact() {
  return (
    <div className="contact_container" id="contact">
      <h1>Contactez-moi !</h1>
      <section className="card_container" id="contact_card">
        <ul>
          <li>
            email :{" "}
            <a href="mailto:aurelienbrethes@gmail.com ">
              {" "}
              aurelienbrethes@gmail.com
            </a>
          </li>
          <li>
            tel : <a href="tel:+0752668535"> 07 52 66 85 35</a>
          </li>
          <li>
            GitHub :{" "}
            <a
              target="_blank"
              className="contact_link"
              href=" https://github.com/aurelienbrethes"
            >
              Lien Github
            </a>
          </li>
          <li>
            LinkedIn :{" "}
            <a
              target="_blank"
              className="contact_link"
              href=" https://www.linkedin.com/in/aur%C3%A9lien-brethes-134178169/"
            >
              Lien LinkedIn
            </a>
          </li>
          <li>
            Mon CV :{" "}
            <a href={cv} download>
              Cliquez ici pour télécharger
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Contact;
