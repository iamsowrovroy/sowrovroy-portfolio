import './Experience.css';

function Experience() {
  return (
    <section className="experience" id="experience">
      <p className="section-label">MY JOURNEY</p>

      <h2>Experience</h2>

      <div className="experience-list">
        <div className="experience-card">
          <h3>WordPress Developer</h3>
          <p>
            Building websites, landing pages, and digital
            experiences using WordPress and Elementor.
          </p>
        </div>

        <div className="experience-card">
          <h3>Frontend Developer</h3>
          <p>
            Learning and building modern web applications
            with React and JavaScript.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
