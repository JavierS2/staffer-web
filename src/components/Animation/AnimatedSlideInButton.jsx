import { motion } from "framer-motion";

const AnimatedSlideInButton = ({ text, href, className = "" }) => {
  return (
    <motion.button
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`button-secondSection ${className}`} // Añadir clase personalizada
      onClick={() => window.location.href = href} // Redirigir al hacer clic
    >
      {text}
    </motion.button>
  );
};

export default AnimatedSlideInButton;
