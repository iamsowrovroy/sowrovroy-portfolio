
import SEO from '../components/SEO';
import ContactSection from '../sections/Contact';
import './Contact.css';

function Contact() {
  return (
    <>
      <SEO
        title="Contact Me"
        description="Get in touch with Sowrov Roy for collaborations, project discussions, and professional opportunities."
        path="/contact"
      />

      <main className="contact-page">
        <ContactSection />
      </main>
    </>
  );
}

export default Contact;
