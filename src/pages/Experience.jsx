
import SEO from '../components/SEO';
import ExperienceSection from '../sections/Experience';
import './Experience.css';

function Experience() {
  return (
    <>
      <SEO
        title="My Experience"
        description="Explore Sowrov Roy's professional experience, development journey, and technology-related work."
        path="/experience"
      />

      <main className="experience-page">
        <ExperienceSection />
      </main>
    </>
  );
}

export default Experience;
