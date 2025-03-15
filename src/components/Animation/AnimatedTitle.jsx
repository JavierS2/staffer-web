import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedTitle({ text }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <motion.h1
      className="animated-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {displayedText} <span className="cursor">|</span>
    </motion.h1>
  );
}
