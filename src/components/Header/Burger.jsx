import './burger.css';

function Burger({showLinks, setShowLinks}) {

let brugerClass = "burger-line";

if ( showLinks ){
    brugerClass += " active";
}

console.log(brugerClass);

  return (
      <div className='navbar-burger'>
            <button type="button" onClick={() => setShowLinks(!showLinks)}>
                <span className={brugerClass}/>
            </button>
        </div>  
  );
}

export default Burger;

