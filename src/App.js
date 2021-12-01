import './App.css';
import Home from './components/Home';
import Carousel from './components/Carousel';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <body>        
        <Home/>
        <Carousel/>
        <About/>
        <Skills/>
        <Contact/>
      </body>
    </div>
  );
}

export default App;
