import React from 'react'
import Home from '../Components/Home'
import Nav from '../Components/Nav'
import Projects from '../Components/Projects'

export default function Main() {
  return (
    <div>
        <header>
            <Nav/>
            <Home/>
        </header>
        <main>
          <Projects/>
        </main>
    </div>
  )
}
