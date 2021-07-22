import './App.scss';
import { useState} from "react";

//Components
import NavBar from './components/nav/NavBar';
import Welcome from './components/home/welcome/Welcome';
import AboutMe from './components/home/aboutme/Aboutme';
import TechStack from './components/home/techstack/Techstack';
import Portfolio from './components/home/portfolio/Portfolio';
import Contact from './components/home/contact/Contact'

function App() {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className='app'>
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className='sections'>
        <Welcome />
        <AboutMe />
        <TechStack />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
