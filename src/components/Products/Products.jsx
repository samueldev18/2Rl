import "./Products.css";

export default function Products() {
  return (
    <section className="products" id="produtos">
      <div className="products-container">
        <header className="products-header">
          <h2>Nossas soluções</h2>
          <p>
            Trabalhamos com marcas e produtos que entregam desempenho,
            durabilidade e confiança para a sua operação.
          </p>
        </header>

        <div className="products-grid">
          <div className="product-card">
            <h3>Equipamentos Industriais</h3>
            <p>
              Soluções robustas para aumentar a produtividade e reduzir custos
              operacionais.
            </p>
          </div>

          <div className="product-card">
            <h3>Componentes Técnicos</h3>
            <p>
              Peças certificadas e compatíveis com diferentes aplicações
              industriais.
            </p>
          </div>

          <div className="product-card">
            <h3>Representação de Marcas</h3>
            <p>
              Conectamos sua empresa a fabricantes reconhecidos no mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
