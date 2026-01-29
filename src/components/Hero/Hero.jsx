import "./Hero.css"

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="hero-overlay" />

      <div className="home-hero-content">
        <span className="hero-tag">Comércio Industrial</span>

        <h1>
          Soluções em <br />
          Máquinas e Insumos
        </h1>

        <p>
          Atuamos com venda de máquinas, luvas, parafusos e materiais
          industriais com foco em qualidade, agilidade e confiança.
        </p>

        <div className="hero-actions">
          <a href="#produtos" className="btn-primary">
            Ver produtos
          </a>

          <a href="#contato" className="btn-outline">
            Falar conosco
          </a>
        </div>
      </div>
    </section>
  )
}