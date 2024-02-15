
import './App.css';
import MainContainer from './components/main/MainContainer';
import Contact from './components/side/Contact';
import SideContainer from './components/side/SideContainer';
import Skills from './components/side/Skills';

function App() {
  return (
    <div className="App">
       <div className='portfolio'>
        <div className="main">
            <MainContainer />
        </div>
        <div className="side">
           <SideContainer />
           <Skills />
           <Contact />
        </div>
       </div>
      
    </div>
  );
}

export default App;
