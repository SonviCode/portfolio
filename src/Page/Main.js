import React from 'react'
import Contact from '../Components/Contact'
import Home from '../Components/Home'
import Nav from '../Components/Nav'
import Projects from '../Components/Projects'
import Technos from '../Components/Technos'

export default function Main() {
  return (
    <div>
        <header>
            <Nav/>
            <Home/>
        </header>
        <main>
          <Projects/>
          <Technos/>
        </main>
        <Contact/>
    </div>
  )
}
