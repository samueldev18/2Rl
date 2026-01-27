
export default function Products() {
  const items = [
    'Máquinas Industriais',
    'Parafusos e Fixadores',
    'Luvas e EPIs',
    'Ferramentas'
  ]

  return (
    <section id="produtos" style={styles.section}>
      <h2>Nossos Produtos</h2>
      <div style={styles.grid}>
        {items.map((item, i) => (
          <div key={i} style={styles.card}>{item}</div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '60px 20px',
    textAlign: 'center'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    marginTop: '40px'
  },
  card: {
    background: 'var(--cinza)',
    padding: '25px',
    borderRadius: '8px',
    fontWeight: 'bold'
  }
}