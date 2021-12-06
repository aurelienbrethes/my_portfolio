import './contact.css';

function Contact() {
  return (
    <div className="contact_container" id="contact">
       <h1>Contactez-moi !</h1>
      <section className="card_container">       
        <ul>
          <li>email : aurelienbrethes@gmail.com</li>
          <li>tel : 07 52 66 85 35</li>
          <li>GitHub : <a target="_blank" className="contact_link" href=" https://github.com/aurelienbrethes">Lien Github</a></li>
          <li>LinkedIn : <a target="_blank" className="contact_link" href=" https://www.linkedin.com/in/aur%C3%A9lien-brethes-134178169/">Lien LinkedIn</a></li>
          <li>Wild Code School : <a target="_blank" className="contact_link" href="https://www.wildcodeschool.com/fr-FR">Lien Wild Code School</a></li>
        </ul>       
      </section>
    </div>
  );
}

export default Contact;