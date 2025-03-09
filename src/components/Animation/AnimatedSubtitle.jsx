import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SecondSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.8;
      if (window.scrollY > triggerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      className="second-section"
      initial={{ y: "100vh", opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="content-info">
        <h2 className="subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde esse quos nihil 
        soluta at necessitatibus optio maiores, provident aperiam saepe fuga ex voluptatibus
        quasi eligendi voluptatem. Necessitatibus qui nisi culpa.
        </h2>
        <p className="description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur nulla beatae 
        consectetur sunt hic officia commodi. Necessitatibus aut recusandae dolor debitis
        praesentium repellendus perferendis exercitationem voluptas illum placeat sequi
        dignissimos eligendi quo corporis consequuntur eius quis ipsum a ea sit ad aliquid
        neque, illo cumque? Quisquam ab accusantium nulla. Provident.
        </p>
        <div className="button-container">
          <button className="custom-button">Haz clic</button>
        </div>
      </div>
      
    </motion.section>
  );
}
