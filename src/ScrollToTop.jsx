import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on every route change
  }, [location]); // Trigger when location changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;
