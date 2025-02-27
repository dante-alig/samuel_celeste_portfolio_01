// Utilitaire pour le tracking Google Analytics
export const trackClick = (elementName, elementType = 'link') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: elementType,
      event_label: elementName,
      timestamp: new Date().toISOString()
    });
  }
};
