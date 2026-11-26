
import SEO from '../components/SEO';
import ProjectsSection from '../sections/Projects';
import './Projects.css';

function Projects() {
  return (
    <>
      <SEO
        title="My Projects"
        description="Explore projects built by Sowrov Roy, showcasing web development, software engineering, and creative technology."
        path="/projects"
      />

      <main className="projects-page">
        <ProjectsSection />
      </main>
    </>
  );
}

export default Projects;
