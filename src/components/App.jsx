
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './Nav/Navbar'
import Home from './home/Home';
import Footer from './footer/Footer';
import Nosotros from './nosotros/Nosotros';
import Dentistas from './Dentistas/Dentistas';
import Contactanos from './contactanos/Contactanos';
import Tratamientos from './tratamientos/Tratamientos';



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/nosotros' element={<Nosotros/>}/>
     <Route path='/contactanos' element={<Contactanos/>}/>
     <Route path='/tratamientos' element={<Tratamientos/>}/>
     <Route path='/dentistas' element={<Dentistas/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </>
  );
}

export default App;

