import './modal.css';
import cross from '../assets/cross.png';

const Modal = ({titre, image, description, tech, setShowModal, link, }) => {

    const handleParentsClick = () => {
        setShowModal(false)
    };

    const handleChildClick = (item) => {
        item.stopPropagation(item);
    };

    return(
        <div className = "close_modal" role="button" onClick={() => handleParentsClick() }>
            <div className="modal_container" onClick={(e) => handleChildClick(e)}>            
                <h3>{titre}</h3>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={image} id="logo_project" alt="logo du projet"/>
                </a>
                <p>{description}</p>
                <h3>Tech utilisées</h3>
                <p>{tech}</p>
                <img src={cross} alt="cross" id="cross" onClick={() => setShowModal(false)} />
            </div>
        </div>
    )
}

export default Modal;