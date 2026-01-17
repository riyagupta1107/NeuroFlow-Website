import { useRef } from 'react'
import './App.css'

import Navbar from './components/NavBar'

import Home from './sections/Home'
import About from './sections/About'
import Neurodiversity from './sections/Neurodiversity'
import HowItHelps from './sections/HowItHelps'
import Features from './sections/Features'
import GetExtension from './sections/GetExtension'
import Install from './sections/Install'


function App() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const neuroRef = useRef(null)
  const helpsRef = useRef(null)
  const featuresRef = useRef(null)
  const getExtRef = useRef(null)
  const installRef = useRef(null)

  return (
    <>
      <Navbar
        sections={{
          homeRef,
          aboutRef,
          neuroRef,
          helpsRef,
          featuresRef,
          getExtRef,
          installRef,
        }}
      />

      {/* Offset for fixed navbar */}
      <div className="pt-24">
        <Home sectionRef={homeRef} />
        <About sectionRef={aboutRef} />
        <Neurodiversity sectionRef={neuroRef} />
        <HowItHelps sectionRef={helpsRef} />
        <Features sectionRef={featuresRef} />
        <GetExtension sectionRef={getExtRef} />
        <Install sectionRef={installRef} />
      </div>
    </>
  )
}

export default App
