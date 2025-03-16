import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TitleTransition = ({ title, titleClass, icon, iconClass, scrollThreshold = 0 }) => {
  const [scrolled, setScrolled] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const titlePosition = titleRef.current.getBoundingClientRect().top;
        
        // Se desvanece cuando sube por encima del threshold y reaparece al bajar
        setScrolled(titlePosition < scrollThreshold && window.scrollY > scrollThreshold);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);

  return (
    <div ref={titleRef} className="title-container">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: scrolled ? 0 : 1 }} // Se desvanece al bajar y reaparece al subir
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h1 className={titleClass}>{title}</h1>
        <motion.div
          className="scroll-indicator"
          animate={{ opacity: scrolled ? 0 : 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className={iconClass}>{icon}</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TitleTransition;
