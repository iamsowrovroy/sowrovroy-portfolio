import './Projects.css';

const projects = [
  {
    title: 'Portfolio Website',
    category: 'Web Development',
    description: 'My personal portfolio built with React.',
  },
  {
    title: 'E-commerce Website',
    category: 'Web Development',
    description: 'A modern e-commerce website project.',
  },
  {
    title: 'Admin Dashboard',
    category: 'Frontend Development',
    description: 'A dashboard interface with interactive components.',
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <p className="section-label">MY WORK</p>

      <h2>Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <span>{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
