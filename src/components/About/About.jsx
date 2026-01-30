import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>
            Soluções que conectam <span>qualidade</span> e <span>resultado</span>
          </h2>

          <p>
            Atuamos com foco em excelência, oferecendo produtos e serviços que
            impulsionam negócios e constroem relações duradouras com nossos
            clientes.
          </p>

          <p>
            Nossa experiência nos permite entregar agilidade, confiança e
            atendimento próximo, sempre alinhados às melhores marcas do mercado.
          </p>
        </div>

        <div className="about-highlight">
          <div className="about-box">
            <strong>Missão</strong>
            <span>Entregar soluções eficientes com qualidade e confiança.</span>
          </div>

          <div className="about-box">
            <strong>Visão</strong>
            <span>Ser referência no mercado e parceiro estratégico.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
