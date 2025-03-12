import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../../styles/about.css"; 

export default function AnimatedSubtitle() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.8;
      const element = document.querySelector(".second-section");
      if (element) {
        const { top } = element.getBoundingClientRect();
        if (top < triggerHeight) {
          setIsVisible(true);
        }
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
      <div className="content-wrapper">
        <div className="content-info">
          <motion.h2 
            className="subtitle"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aperiam praesentium explicabo et quidem blanditiis atque sit odit rem tenetur, quisquam quos laboriosam id nostrum maiores quaerat enim asperiores porro.
          </motion.h2>
          <motion.p 
            className="description"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatem eaque voluptates deleniti, ut dolorum ipsa fugiat velit iusto recusandae deserunt aliquid ea quasi illum corrupti natus. Blanditiis dicta, fuga quibusdam quo fugiat sed, asperiores sint explicabo architecto recusandae alias dolore, illum facere nobis necessitatibus eligendi nemo. 
            <br />Odit laudantium necessitatibus eius harum magni praesentium enim est, dolore officiis totam corrupti quisquam dolorum quibusdam consequuntur, dolor numquam, culpa quidem soluta natus itaque velit voluptatem?. Rerum beatae animi delectus earum, esse neque illum sequi autem quidem cupiditate excepturi dolorem modi eligendi pariatur facilis iste? Ab blanditiis unde officia. Nemo sit alias laudantium.
          </motion.p>
        </div>
      </div>
      
      {/* Imagen animada */}
      <motion.div
        className="image"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img src="/images/stafferlogoWyear.png" alt="Staffer Light Purple" />
      </motion.div>
    </motion.section>
  );
}
