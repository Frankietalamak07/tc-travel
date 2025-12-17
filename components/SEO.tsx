import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
  schema?: Record<string, any>;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  image,
  type = 'website',
  schema 
}) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Helper to update meta tags by name
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to update Open Graph tags by property
    const updateOg = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);
    
    updateOg('og:title', title);
    updateOg('og:description', description);
    updateOg('og:type', type);
    if (image) {
        updateOg('og:image', image);
        updateOg('twitter:image', image);
        updateOg('twitter:card', 'summary_large_image');
    }
    updateOg('og:url', window.location.href);

    // JSON-LD Structured Data
    const baseSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "TC Travel Asia",
        "url": window.location.href,
        "description": description,
        "image": image,
        "priceRange": "$$$",
        "areaServed": {
            "@type": "Country",
            "name": "Philippines"
        },
        "knowsAbout": [
            "Luxury Travel Philippines",
            "Boracay 5-Star Resorts",
            "Palawan Private Islands",
            "Siargao Luxury Villas",
            "BGC Real Estate",
            "Manila Condos for Rent",
            "Philippine Investment Properties",
            "El Nido Island Hopping"
        ],
         "brand": {
            "@type": "Brand",
            "name": "TC Travel Asia"
          }
    };

    const finalSchema = schema || baseSchema;

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(finalSchema);

  }, [title, description, keywords, image, type, schema]);

  return null;
};