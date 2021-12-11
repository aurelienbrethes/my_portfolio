import './project.css';
import { useState } from 'react';
import Modal from './Modal';

function Project({titre, tech, image, description, link }) {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {

        if ( !showModal ){
            setShowModal(true)
        }
    }  

  return (
    <div>
            <div className="mini_card">
                <h3>{titre}</h3>
                <img src={image} alt="logo du projet" />
                <button type="button" onClick={() => openModal()}>En savoir plus</button>
            </div>  
            <div className={showModal ? "modal" : "displayNone"}>
                <Modal
                titre={titre}
                image={image}
                tech={tech}
                description={description}
                setShowModal={setShowModal}
                link={link}
                />
        </div>        
    </div>
  );
}

export default Project;