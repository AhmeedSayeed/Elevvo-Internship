import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import CallToAction from './components/CallToAction.jsx'
import Footer from './components/Footer.jsx'

import './App.css'

function App() { 

  return (  
    <>
    <NavBar />
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <Footer />
    </main>
    </>
  )
}

export default App
