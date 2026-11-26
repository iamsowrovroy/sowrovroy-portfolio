import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <p className="hero-label">TECHNOLOGY ENTHUSIAST</p>

      <h1>
        Building with Technology.
        <br />
        Thinking Beyond Limits.
      </h1>

      <p className="hero-description">
        I'm Sowrov Roy — exploring technology, building digital
        experiences, and turning ideas into reality.
      </p>

      <div className="hero-actions">
        <a href="#projects">Explore My Work</a>
        <a href="#contact">Get In Touch</a>
      </div>
    </section>
  );
}

export default Hero;
