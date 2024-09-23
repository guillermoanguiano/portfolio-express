import { CiLinkedin, CiMail } from "react-icons/ci";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="py-16 md:py-36 section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-xl">
        <div className="flex gap-4 b-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/me.jpg"
              alt="picture of me"
              className="rounded-full shadow-lg w-[6.5rem] h-28 object-cover"
            />
          </motion.div>
          <a
            href="https://linkedin.com/in/guille128"
            target="_blank"
            rel="noopener"
            className="flex items-center transition md:justify-center md:hover:scale-105"
          >
            <div className="flex items-center ">
              <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                <span className="spin-gradient"></span>
                <div className="available-badge">Available to work!</div>
              </span>
            </div>
          </a>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-white mt-3">
          Guillermo Anguiano
        </h1>
        <p className="mt-6 text-xl [&>strong]:font-semibold text-gray-300">
          <strong>Fullstack Developer with +1 years of experience</strong>{" "}
          offering multilingual programming, system monitoring and maintenance
          prowess. Dedicated to continuous learning from other developers and
          team members.
        </p>
        <nav className="mt-4 flex gap-4">
          <a className="hero-btn" href="mailto:jguillermoang@gmail.com">
            <CiMail className="w-5 h-5" />
            <span>Contact me</span>
          </a>
          <a className="hero-btn" href="https://linkedin.com/in/guille128">
            <CiLinkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </nav>
      </div>
    </motion.section>
  );
};

export { Hero };
