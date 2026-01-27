export default function About() {
  return (
    <section id="sobre" style={styles.section}>
      <h2>Sobre a Empresa</h2>
      <p>
        A 2RL Representação e Comércio LTDA atua no comércio de máquinas,
        ferramentas, parafusos e equipamentos de segurança.
      </p>
    </section>
  )
}

const styles = {
  section: {
    padding: '60px 20px',
    maxWidth: '800px',
    margin: 'auto',
    textAlign: 'center'
  }
}