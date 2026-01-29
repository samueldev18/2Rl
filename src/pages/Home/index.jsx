import './styles.css'


import Products from '../../components/Products'
import About from '../../components/About'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </>
  )
}