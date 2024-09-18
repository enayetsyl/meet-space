import React, { useState, useEffect } from "react";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility of the button
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // Show after scrolling 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="bg-customGreen text-white px-3 py-1 font-bold  text-2xl shadow-lg hover:bg-customOrange focus:outline-none transition duration-300"
        >
          {/* You can use an icon here */}
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
