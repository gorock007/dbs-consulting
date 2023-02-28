import React from 'react';
import './App.css';
import Home from './views/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './views/About';
import Services from './views/Services';
import ContactUs from './views/ContactUs';
import { animateScroll } from 'react-scroll';
import Blog from './views/Blog';

function App() {
  const handleClick = ()=>{
    animateScroll.scrollToTop();
  }

  return (
    <Router className="App">
      <Routes>
        <Route path='/' onClick={handleClick} element={<Home/>} exact />
        <Route path='/about' onClick={handleClick} element={<About/>} exact />
        <Route path='/services' onClick={handleClick} element={<Services/>} exact />
        <Route path='/blog' onClick={handleClick} element={<Blog/>} exact />
        <Route path='/contact' onClick={handleClick} element={<ContactUs/>} exact />
      </Routes>
  
    </Router>
  );
}

export default App;
