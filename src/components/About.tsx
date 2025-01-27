import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="aspect-square rounded-2xl overflow-hidden"
            variants={fadeInUp}
          >
            <img
              src="/Mohammad.jpg"
              alt="Piyush Agarwal"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
              Hi, I'm Mohammad Marghoob, a passionate Front-end Developer based
              in Shiraz-IR. passionate about crafting accessible, pixel-perfect
              user interfaces that blend thoughtful design with robust
              engineering. With extensive experience in modern web technologies
              and a strong foundation in both frontend and a bit of backend.
            </motion.p>

            <motion.p className="text-lg text-gray-600" variants={fadeInUp}>
              In the past, I've had the opportunity to work as a Network
              Technician in city of birjand where i found my passion for
              programming where i started as an intern as a Backend developer,
              developing apps in PHP.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              variants={fadeInUp}
            >
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">1+</h3>
                <p className="text-gray-600">Years Experience - Front-End</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-xl text-gray-900">2+</h3>
                <p className="text-gray-600">Experience - network technician</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
