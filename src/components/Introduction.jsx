import { useRef } from "react";
import "./Introduction.css";

const Introduction = ({ scrollToProjects }) => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-black text-white text-center">
      <div className="relative z-10 space-y-8 p-6 bg-black bg-opacity-50 rounded-lg shadow-lg ">
        <img
          src="/images/IMG_2676.jpg"
          alt="Ahmad Raza"
          className="w-32 h-full   rounded-full mx-auto mb-4 "
        />
        <h1 className="text-4xl md:text-6xl font-bold animate-fadeIn space-y-4 ">
          <div className="relative inline-block">
            <span className="intro-word">MERN</span>
            <span className="intro-word">STACK</span>
            <i className="fas fa-laptop-code intro-icon pulsate-bck"></i>
          </div>
          <div className="relative inline-block">
            <span className="intro-word">DEVELOPER</span>
            <i className="fas fa-code intro-icon pulsate-bck"></i>
          </div>
          <div className="relative inline-block">
            <span className="intro-word">PASSIONATE</span>
            <span className="intro-word">ABOUT</span>
            <i className="fas fa-heart intro-icon pulsate-bck"></i>
          </div>
          <div className="relative inline-block">
            <span className="intro-word">CREATING</span>
            <span className="intro-word">WEB</span>
            <i className="fas fa-globe intro-icon pulsate-bck"></i>
          </div>
          <div className="relative inline-block">
            <span className="intro-word">APPLICATIONS</span>
          </div>
        </h1>
        <button
          onClick={scrollToProjects}
          className="px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-md transition duration-300"
        >
          Explore My Work
        </button>
      </div>
    </section>
  );
};

export default Introduction;
