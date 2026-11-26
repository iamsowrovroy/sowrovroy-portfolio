
import SEO from '../components/SEO';
import WritingSection from '../sections/Writing';
import './Writing.css';

function Writing() {
  return (
    <>
      <SEO
        title="Writing & Articles"
        description="Read Sowrov Roy's articles, technical insights, learning notes, and thoughts on technology and innovation."
        path="/writing"
      />

      <main className="writing-page">
        <WritingSection />
      </main>
    </>
  );
}

export default Writing;
