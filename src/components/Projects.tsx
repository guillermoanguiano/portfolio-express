import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const Projects = () => {
  return (
    <motion.section
      id="hero"
      className="section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold flex items-center gap-3 mb-10">
        <FaCode size={32} /> Projects
      </h2>
    </motion.section>
  );
};

export { Projects };
