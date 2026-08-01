import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/layout/Header'
import Products from './pages/Products'
import Category from './pages/Category'
function App() {
  return (
    <>
      <Header />
      <nav>
        <div className='container'>
            <Link className='me-3' to="/">Home</Link>
            <Link className='me-3' to="/about">About us</Link>
            <Link className='me-3' to="/products">Product</Link>
            <Link className='me-3' to="/forecast">Forecast weather</Link>
        </div>
      </nav>
      <main>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/about' Component={About} />
            <Route path='/products' Component={Products} />
            <Route path='/category/:slug' Component={Category} />
          </Routes>
      </main>
    </>
  )
}

export default App
