import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import Carousel from './components/Carousel';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {

  const [wheel, setWheel] = useState(false);

  const wheelFunction = (e) => {
    if(e.deltaY < 0){
      setWheel(true)
    } else if (e.deltaY > 0){
      setWheel(false)
    }
  } 

  return (
    <div className="App"
    onWheel={(e) => wheelFunction(e) }
    >
      <header>
        <Header wheel={wheel}/>
      </header>
      <main>        
        <Home/>
        <About/>
        <Carousel/>        
        <Skills/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
