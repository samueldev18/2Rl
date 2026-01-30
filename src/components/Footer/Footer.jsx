import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <h3>2RL</h3>
          <p>
            Representação e Comércio focada em soluções industriais,
            conectando qualidade, eficiência e confiança.
          </p>
        </div>

        <div className="footer-links">
          <h4>Institucional</h4>
          <a href="#sobre">Quem somos</a>
          <a href="#produtos">Produtos</a>
          <a href="#contato">Contato</a>
        </div>

        <div className="footer-links">
          <h4>Contato</h4>
          <span>📍 Brasil</span>
          <span>📞 (11) 99999-9999</span>
          <span>✉️ contato@2rl.com.br</span>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} 2RL Representação e Comércio. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
