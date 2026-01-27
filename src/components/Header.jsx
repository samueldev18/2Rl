import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <img src={logo} alt="2RL Logo" />
      </div>
      <nav>
        <a href="#produtos">Produtos</a>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  )
}