import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name = 'Sajjalashree Surgical', type = 'website' }) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{`${title} | ${name}`}</title>
      <meta name='description' content={description} />
      
      {/* Open Graph tags (Facebook) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Sajjalashree Surgical and Medical Equipments",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Radio Complex, Bellary Road",
            "addressLocality": "Bellary",
            "addressRegion": "Karnataka",
            "postalCode": "583101",
            "addressCountry": "IN"
          },
          "telephone": "+91-9876543210",
          "url": "https://sajjalashree.com"
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
