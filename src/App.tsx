import { Experience, Header, Hero, Projects } from "./components";
import { AuroraBackground } from "./components/ui";
import { motion } from "framer-motion";

function App() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <Header />

        <main>
          <Hero />

          <div className="space-y-24">
            <Experience />
            <Projects />
          </div>
        </main>
      </motion.div>
    </AuroraBackground>
  );
}

export default App;
