export default function Footer() {
  return (
    <footer style={styles.footer}>
      © 2RL Representação e Comércio LTDA
    </footer>
  )
}

const styles = {
  footer: {
    background: 'var(--preto)',
    color: 'white',
    textAlign: 'center',
    padding: '20px'
  }
}