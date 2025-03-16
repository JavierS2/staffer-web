import { motion } from "framer-motion";

const AnimatedFadeInImage = ({ src, alt, className = "" }) => {
  return (
    <motion.img
      initial={{ scale: 0.8, opacity: 0 }} // Comienza más pequeña y transparente
      whileInView={{ scale: 1, opacity: 1 }} // Se anima cuando entra en el viewport
      transition={{ duration: 0.8, ease: "easeOut" }} // Suaviza la animación
      viewport={{ once: false, amount: 0.2 }} // Se activa al 20% de visibilidad
      src={src}
      alt={alt}
      className={className}
    />
  );
};

export default AnimatedFadeInImage;
