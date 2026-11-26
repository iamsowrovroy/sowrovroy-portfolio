
import SEO from '../components/SEO';

import Hero from '../sections/Hero';
import About from '../sections/About';
import Expertise from '../sections/Expertise';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Research from '../sections/Research';
import Writing from '../sections/Writing';
import Contact from '../sections/Contact';

import './Home.css';

function Home() {
  return (
    <>
      <SEO
        title="Technology Enthusiast & Web Developer"
        description="I'm Sowrov Roy, a technology enthusiast exploring software development, innovation, and emerging technologies."
        path="/"
      />

      <main className="home-page">
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Research />
        <Writing />
        <Contact />
      </main>
    </>
  );
}

export default Home;
