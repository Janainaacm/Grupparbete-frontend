import { useState } from "react";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      id="toggle-filter-button"
      onClick={scrollToTop}
      style={{
        position: "sticky",
        bottom: "1%",
        left: "80%",
        display: visible ? "inline" : "none",
      }}
    >
      Till Topp
    </button>
  );
};

export default BackToTopButton;
