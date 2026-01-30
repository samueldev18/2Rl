import './styles.css'


import Hero from '../../components/Hero/Hero'
import Highlights from '../../components/Highlights/Highlights'
import About from '../../components/About/About'
import CTA from '../../components/CTA/CTA'
import Products from '../../components/Products/Products'
import Footer from '../../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <About />
      <Products />
      <CTA />
      <Footer />
    </>
  )
}