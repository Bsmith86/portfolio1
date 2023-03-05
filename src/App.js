
import './App'
import Intro from './pages/intro';
import Education from './pages/education';
import Gallery from './pages/gallery';
import Projects from './pages/projects';

function App() {
let x = 5;


  return (
    <div className="App">
     <Intro />
     <Education />
     {/* <Gallery /> */}
     <Projects />
    </div>
  );
}

export default App;
