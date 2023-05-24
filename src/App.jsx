import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './views/Home'
import Pokemones from './views/Pokemones'
import Filtro from './views/Filtro'

import Navbar from './components/Navbar'


function App() {

  return (
    <>
  <div className='container-fluid p-0'>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pokemones" element={<Pokemones/>}/>
        <Route path="/pokemones/:name" element={<Filtro/>}/>
      </Routes>
    </BrowserRouter>
  </div>

    </>
  )
}

export default App
