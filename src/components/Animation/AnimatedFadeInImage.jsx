import { motion } from "framer-motion";

const AnimatedFadeInImage = ({ src, alt, className = "" }) => {
  return (
    <motion.img
      initial={{ scale: 0.8, opacity: 0 }} // Comienza más pequeña y transparente
      animate={{ scale: 1, opacity: 1 }} // Llega a su tamaño normal y visible
      transition={{ duration: 0.8, ease: "easeOut" }} // Suaviza la animación
      src={src}
      alt={alt}
      className={className}
    />
  );
};

export default AnimatedFadeInImage;
