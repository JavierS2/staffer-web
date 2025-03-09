import { motion } from "framer-motion";
import { h1 } from "framer-motion/client";
import { useEffect, useState } from "react";

const fullText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut fugiat pariatur a ipsam nulla doloribus ea quasi qui quo. Blanditiis, quod? Ratione libero assumenda quas pariatur, expedita consectetur dignissimos sapiente."; // Texto que se animará

export default function AnimatedTitle() {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [index]);

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
