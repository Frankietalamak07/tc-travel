import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  image 
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
    if (image) {
        updateOg('og:image', image);
        updateOg('twitter:image', image);
    }
    updateOg('og:url', window.location.href);

  }, [title, description, keywords, image]);

  return null;
};