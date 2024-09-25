import { motion } from "framer-motion";
import { navItems } from "../data";

const Header = () => {
  return (
    <motion.header
      className="w-full flex items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex gap-5 p-5">
        {navItems.map((item, index) => (
          <a
            href={item.link}
            className="text-white hover:text-lime-500 font-medium transition"
            key={index}
          >
            {item.name}
          </a>
        ))}
      </div>
    </motion.header>
  );
};

export { Header };
