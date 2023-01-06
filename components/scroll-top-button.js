import styles from "../styles/TopButton.module.css";
import { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  function toggleVisible() {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <div className={styles.topButton}
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    ></div>
  );
}
