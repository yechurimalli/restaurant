import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Two from './components/Two'; 
import {BrowserRouter,Routes,Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
  <Routes>
    <Route path="/" element={<Header/> }/>
    <Route path="/About.js" element={<About/>}/>
    <Route path="/Contact.js" element={<Contact/>}/>
    <Route path="*" element={<NotFound/>}/>
    <Route path="/Two" element={<Two/>}/>
  </Routes>
  </BrowserRouter>);
  

