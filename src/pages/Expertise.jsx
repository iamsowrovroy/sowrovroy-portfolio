
import SEO from '../components/SEO';
import ExpertiseSection from '../sections/Expertise';
import './Expertise.css';

function Expertise() {
  return (
    <>
      <SEO
        title="My Expertise"
        description="Explore Sowrov Roy's areas of interest and expertise in web development, artificial intelligence, cybersecurity, and technology."
        path="/expertise"
      />

      <main className="expertise-page">
        <ExpertiseSection />
      </main>
    </>
  );
}

export default Expertise;
