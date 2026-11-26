import './Expertise.css';

const expertise = [
  {
    title: 'Web Development',
    description: 'Building modern, responsive websites and web applications.',
  },
  {
    title: 'Artificial Intelligence',
    description: 'Exploring AI technologies and intelligent solutions.',
  },
  {
    title: 'Cybersecurity',
    description: 'Learning security concepts and digital protection.',
  },
  {
    title: 'Technology & Business',
    description: 'Connecting technology, innovation, and entrepreneurship.',
  },
];

function Expertise() {
  return (
    <section className="expertise" id="expertise">
      <p className="section-label">WHAT I EXPLORE</p>
      <h2>Areas of Expertise</h2>

      <div className="expertise-grid">
        {expertise.map((item) => (
          <div className="expertise-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Expertise;
