import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../../styles/about.css"; 

export default function AnimatedSubtitle({ title, description, imageSrc, altText }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.8;
      const element = document.querySelector(".second-section");
      if (element) {
        const { top } = element.getBoundingClientRect();
        if (top < triggerHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      className="second-section"
      initial={{ y: "100vh", opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="content-wrapper">
        <div className="content-info">
          <motion.h2 
            className="subtitle"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="description"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
      
      <motion.div
        className="image"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img src={imageSrc} alt={altText} />
      </motion.div>
    </motion.section>
  );
}
