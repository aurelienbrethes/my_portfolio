import './modal.css';
import cross from '../assets/cross.png';

const Modal = ({titre, image, description, tech, setShowModal, link, github }) => {

    const handleParentsClick = () => {
        setShowModal(false)
    };

    const handleChildClick = (item) => {
        item.stopPropagation(item);
    };

    return(
        <main className = "close_modal" role="button" onClick={() => handleParentsClick() }>
            <section className="modal_container" onClick={(e) => handleChildClick(e)}>            
                <h3>{titre}</h3>
                <div className='aside_modal_container'>
                    <aside className="aside_modal">
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <img src={image} id="logo_project" alt="logo du projet"/>
                        </a>
                        <h4>Techs utilisées</h4>
                        <p>{tech}</p>
                    </aside>
                    <aside className="aside_modal">
                        <h4>Description</h4>
                        <p>{description}</p>
                        {github[0] && 
                        <h4>Lien Github</h4> }                       
                        {github[0] && 
                        <a href={github[0]}>Front : Cliquer ici</a> }
                        {github[1] && 
                        <a href={github[1]}>Back : Cliquer ici</a> }                      
                    </aside>
                </div>           
                <img src={cross} alt="cross" id="cross" onClick={() => setShowModal(false)} />
            </section>
        </main>
    )
}

export default Modal;