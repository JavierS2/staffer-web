import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function AnimatedTitle({ text, delay = 0, typingSpeed = 25 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      // Espera el tiempo del delay antes de comenzar a escribir
      const timeout = setTimeout(() => setStartTyping(true), delay);
      return () => clearTimeout(timeout);
    }
  }, [inView, delay]);

  useEffect(() => {
    if (startTyping && index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, typingSpeed); // Velocidad de tipeo ajustable
      return () => clearTimeout(timeout);
    }
  }, [index, text, startTyping, typingSpeed]);

  return (
    <motion.h1
      ref={ref}
      className="animated-title"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {displayedText}
      {startTyping && index < text.length && <span className="cursor">|</span>}
    </motion.h1>
  );
}