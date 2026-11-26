import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="section-label">LET'S CONNECT</p>

      <h2>Get In Touch</h2>

      <p className="contact-description">
        Have an idea, project, or opportunity?
        Let's connect and build something meaningful.
      </p>

      <a href="mailto:hello@sowrovroy.com" className="contact-button">
        Send Me an Email
      </a>
    </section>
  );
}

export default Contact;
