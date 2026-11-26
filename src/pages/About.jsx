
import SEO from '../components/SEO';
import AboutSection from '../sections/About';
import './About.css';

function About() {
  return (
    <>
      <SEO
        title="About Me"
        description="Learn more about Sowrov Roy, his technology journey, interests, skills, and passion for innovation."
        path="/about"
      />

      <main className="about-page">
        <AboutSection />
      </main>
    </>
  );
}

export default About;
