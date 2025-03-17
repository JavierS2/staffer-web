import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function AnimatedTitle({ text }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView && index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 20); // Aumenta la velocidad de tipeo
      return () => clearTimeout(timeout);
    }
  }, [index, text, inView]);

  return (
    <motion.h1
      ref={ref}
      className="animated-title"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
      transition={{ duration: 0.3, ease: "easeOut" }} // Transición rápida
    >
      {displayedText} <span className="cursor">|</span>
    </motion.h1>
  );
}
