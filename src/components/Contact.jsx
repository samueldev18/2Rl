export default function Contact() {
  return (
    <section id="contato" style={styles.section}>
      <h2>Contato</h2>
      <a
        href="https://wa.me/5599999999999"
        target="_blank"
        style={styles.btn}
      >
        Falar no WhatsApp
      </a>
    </section>
  )
}

const styles = {
  section: {
    padding: '60px 20px',
    textAlign: 'center'
  },
  btn: {
    background: '#25d366',
    color: 'white',
    padding: '15px 30px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
}