import { useEffect, useState } from 'react'

//import './App.css'
import { BrowserRouter, Routes, Route, Router } from "react-router";
import Home from './pages/Home';
import Listar from './pages/Listar';
import Contactos from './pages/Contactanos';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/listar" element={<Listar/>}/>
        <Route path="/contactos" element={<Contactos/>}/>

      </Routes>
    </>
  )
}

export default App