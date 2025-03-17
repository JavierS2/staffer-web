import { useEffect, useRef, useState } from "react";
import "../../styles/index.css"; // Asegúrate de que el CSS está en la ruta correcta

const AnimatedImage = ({ src, alt = "Animated Image", className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Deja de observar después de activarse una vez
        }
      },
      { threshold: 0.3 } // Se activa cuando el 30% de la imagen es visible
    );

    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <img 
      ref={imageRef} 
      src={src} 
      alt={alt} 
      className={`animated-image ${className} ${isVisible ? "visible" : ""}`} 
    />
  );
};

export default AnimatedImage;
