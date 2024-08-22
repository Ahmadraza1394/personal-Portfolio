import { useRef, useEffect } from "react";
import "./App.css";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import UniqueInfo from "./components/UniqueInfo";
import TeachHtml from "./components/TeachHtml";
import HtmlTutorial from "./components/HtmlTutorial";
import CSSTutorial from "./components/CSSTutorial";
import JsTutorial from "./components/JsTutorial";
import { motion, useAnimation, useScroll, useSpring } from "framer-motion";

import Testimonial from "./components/Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const projectsRef = useRef(null);
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }));
  }, [controls]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="App">
      <motion.div style={{ scaleX }} className="progress-bar" />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.8 }}
      >
        <Introduction scrollToProjects={scrollToProjects} />
      </motion.div>
      <hr />

      <Skills />

      <hr />

      <Projects />
      <hr />

      <Testimonial />

      <hr />

      <TeachHtml />

      <hr />

      <ContactForm />

      {/* <hr /> */}

      <UniqueInfo />
    </div>
  );
}

export default App;
