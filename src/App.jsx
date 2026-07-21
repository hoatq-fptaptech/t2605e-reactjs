import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/layout/Header'


function App() {
  
  return (
    <>
      <Header />
      <nav>
        <div className='container'>
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
        </div>
      </nav>
      <main>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/about' Component={About} />
          </Routes>
      </main>
    </>
  )
}

export default App
