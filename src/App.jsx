import { useState } from 'react'
import NavBar from "./components/navbar/Navbar"

import './app.scss'
import Test from './components/Test'
import Hero from './components/hero/Hero'

function App() {
  

  return (
    <>
      <div id='Homepage' className='nav-bar'><NavBar/></div>
      <section id='Skills'><Hero/></section>
      <section id='Portfolio'>Work</section>
      <section id='Contact'>Contact me</section>
     
      
      
       
    </>
  )
}

export default App
