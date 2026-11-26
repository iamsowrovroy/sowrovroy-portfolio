
import { Helmet } from 'react-helmet-async';

function SEO({ title, description, path = '/' }) {
  const siteName = 'Sowrov Roy';
  const siteUrl = 'https://sowrovroy.com';

  const canonicalUrl = `${siteUrl}${path}`;
  const socialImage = `${siteUrl}/og-image.png`;
  const fullTitle = `${title} | ${siteName}`;

  // Person Schema
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sowrov Roy',
    url: siteUrl,
    image: socialImage,
    jobTitle: 'Technology Enthusiast & Web Developer',
    sameAs: [
      'https://github.com/iamsowrovroy',
      'https://www.linkedin.com/in/iamsowrovroy',
      'https://www.facebook.com/iamsowrovroy',
    ],
  };

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@iamsowrovroy" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />

      {/* Person Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
    </Helmet>
  );
}

export default SEO;
