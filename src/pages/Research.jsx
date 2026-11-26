
import SEO from '../components/SEO';
import ResearchSection from '../sections/Research';
import './Research.css';

function Research() {
  return (
    <>
      <SEO
        title="Research"
        description="Explore Sowrov Roy's research interests, technical explorations, and studies in emerging technologies."
        path="/research"
      />

      <main className="research-page">
        <ResearchSection />
      </main>
    </>
  );
}

export default Research;
