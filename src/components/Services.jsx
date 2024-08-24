import { motion } from "framer-motion";
import { FaCode, FaServer, FaMobileAlt, FaDesktop } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces using modern frameworks like React.",
    },
    {
      icon: FaServer,
      title: "Backend Development",
      description:
        "Building robust server-side applications and APIs using Node.js and Express.",
    },
    {
      icon: FaMobileAlt,
      title: "Mobile App Development",
      description:
        "Developing cross-platform mobile applications using modern technologies like React Native.",
    },
    {
      icon: FaDesktop,
      title: "Full Stack Development",
      description:
        "End-to-end web application development, from database to user interface.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-16 text-green-400 relative"
        >
          Web Development Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <div className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <service.icon className="text-5xl text-green-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center text-green-400">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {service.description}
                </p>
              </div>
              <div className="bg-green-600 h-2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
