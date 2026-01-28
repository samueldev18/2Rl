import { useState } from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="brand">
        <img src={logo} alt="2RL Logo" />
      </div>

      <nav className={`nav ${open ? 'open' : ''}`}>
        <a href="#produtos" onClick={() => setOpen(false)}>Produtos</a>
        <a href="#sobre" onClick={() => setOpen(false)}>Sobre</a>
        <a href="#contato" onClick={() => setOpen(false)}>Contato</a>
      </nav>

      <button
        className={`hamburger ${open ? 'active' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}