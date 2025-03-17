import { useEffect, useRef, useState } from "react";
import "../../styles/index.css"; // Asegúrate de que el CSS está en la ruta correcta

const AnimatedText = ({ text, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Deja de observar después de activarse una vez
        }
      },
      { threshold: 0.3 } // Se activa cuando el 30% del texto es visible
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <p ref={textRef} className={`animated-text ${className} ${isVisible ? "visible" : ""}`}>
      {text}
    </p>
  );
};

export default AnimatedText;
