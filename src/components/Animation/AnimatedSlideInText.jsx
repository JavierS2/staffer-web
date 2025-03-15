import { motion } from "framer-motion";


const SlideInText = ({ text }) => {
  return (
    <motion.p
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {text}
    </motion.p>
  );
};

export default SlideInText;
