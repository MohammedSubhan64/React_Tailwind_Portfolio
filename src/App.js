import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
// import Header from './components/Header';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (

    <>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Work/>
    <Contact/>
    </>

    // <>
    // <Router>
    // <Header/>
    //   <Routes>
    //   <Route path='/' element={ <Home/>} ></Route>
    //   <Route path='/about' element={ <About/>} ></Route>
    //   <Route path='/skills' element={ <Skills/>} ></Route>
    //   <Route path='/work' element={   <Work/>} ></Route>
    //   <Route path='/contact' element={<Contact/>} ></Route>
    //   </Routes>

    // </Router>
    
    // </>
  
  );
}

export default App;
