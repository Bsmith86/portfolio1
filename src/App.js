
import './App'
import Intro from './pages/intro';
import Education from './pages/education';
import Projects from './pages/projects';
import About from './pages/about';
import Contact from './pages/contact';

function App() {

  return (
    <div className="App">
     <Intro />
     <About />
     <Education />
     <Projects />
     <Contact />
    </div>
  );
}

export default App;
