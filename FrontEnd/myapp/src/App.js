// import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
// import Home from "./components/Home";
import Contact from './components/Contact';
// import {Routes,Router} from 'react-router-dom';
import { Routes,Route} from "react-router-dom";
// import About from './components/About';
import Home from './components/Home';
import Error from "./components/Error"
import Projects from "./components/Projects";
import Dashboard from './components/Dashboard';
function App() {
  return (
    <>


<Menu/>
    

      <Routes>
        <Route path="/contact" element={ <Contact/> }/>
        <Route path="/dashboard" element={ <Dashboard/> }/>
        <Route path="/projects" element={ <Projects/> }/>
        <Route path="/" element={ <Home/> }/>
        <Route  path="" element={ <Error/> }/>
        
      </Routes>



    
    </>
     
  );
}

export default App;
