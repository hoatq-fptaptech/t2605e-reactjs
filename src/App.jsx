import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
      </Routes>
    </>
  )
}

export default App
