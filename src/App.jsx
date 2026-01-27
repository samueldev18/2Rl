import { useState } from 'react'

import Splash from './components/Splash'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  if (showSplash) {
    return <Splash onFinish={() => setShowSplash(false)} />
  }

  return (
    <>
      <Header />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App