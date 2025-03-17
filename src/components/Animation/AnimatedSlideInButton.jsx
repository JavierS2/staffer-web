import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AnimatedSlideInButton = ({ text, href, className = "", delay}) => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay); // Ahora usa el parámetro `delay`
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => observer.disconnect();
  }, [delay]); // Se vuelve a ejecutar si cambia el `delay`

  return (
    <motion.button
      ref={buttonRef}
      initial={{ x: -100, opacity: 0 }}
      animate={isVisible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`button-secondSection ${className}`}
      onClick={() => window.location.href = href}
    >
      {text}
    </motion.button>
  );
};

export default AnimatedSlideInButton;
