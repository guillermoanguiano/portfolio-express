import { MdWork } from "react-icons/md";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { experience } from "../data";

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold flex items-center gap-3 mb-10">
        <MdWork size={32} /> Experience
      </h2>

      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {experience.map((experience, index) => (
          <Reveal key={index} width="w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
            >
              <h2 className="text-gray-100 text-2xl flex justify-between font-semibold">
                {experience.company}
                <span className="text-gray-300 text-sm text-right">
                  {experience.period}
                </span>
              </h2>
              <div className="flex justify-between items-center mt-3">
                <p>
                  {experience.description.map((description, index) => (
                    <span
                      key={index}
                      className="text-gray-400 mt-4 text-pretty list-item w-[90%]"
                    >
                      {description}
                    </span>
                  ))}
                </p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </motion.section>
  );
};

export { Experience };
