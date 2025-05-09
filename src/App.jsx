import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

const App = () => {
  return (
    <div>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/project' element={<MyWork/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
