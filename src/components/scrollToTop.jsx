import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);   // scroll to top whenever route changes
  }, [pathname]);

  return null; // this component doesn’t render anything
};

export default ScrollToTop;
