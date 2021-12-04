import './modal.css';
import cross from './cross.png';

const Modal = ({titre, image, description, tech, setShowModal}) => {

    return(
        <div className="modal_container">            
            <h3>{titre}</h3>
            <img src={image} id="logo_project" alt="logo du projet" />
            <p>{description}</p>
            <h3>Tech utilisées</h3>
            <p>{tech}</p>
            <img src={cross} alt="cross" id="cross" onClick={() => setShowModal(false)} />
        </div>
    )
}

export default Modal;