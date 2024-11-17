import './App.css';
import About from './component/About';
import Body from './component/Body';
import ContactUs from './component/ContactUs';
import Navbar from './component/Navbar';
import Project from './component/Project';
import Skills from './component/Skills';
import Team from './component/Team';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Body></Body>
    <About></About>
    <Skills></Skills>
    <Project></Project>
    <ContactUs></ContactUs>
    <Team></Team>
    </>
  );
}

export default App;
