
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './Nav/Navbar'
import Home from './home/Home';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
     <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;

