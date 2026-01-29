import "./Highlights.css";

export default function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights-container">
        <div className="highlight-card">
          <strong>+10 anos</strong>
          <span>de atuação industrial</span>
        </div>

        <div className="highlight-card">
          <strong>Parcerias</strong>
          <span>com marcas consolidadas</span>
        </div>

        <div className="highlight-card">
          <strong>Atendimento</strong>
          <span>rápido e personalizado</span>
        </div>

        <div className="highlight-card">
          <strong>Qualidade</strong>
          <span>em cada solução entregue</span>
        </div>
      </div>
    </section>
  );
}