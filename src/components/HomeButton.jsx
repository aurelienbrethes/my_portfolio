import './homeButton.css';

function HomeButton({labelButton}) {
  return (
    <div>      
        <button className="homeButton" type="button">{labelButton}</button>     
    </div>
  );
}

export default HomeButton;