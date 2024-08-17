import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HtmlTutorial from "./HtmlTutorial";
import CssTutorial from "./CSSTutorial";
import JavaScriptTutorial from "./JsTutorial";

const TeachHtml = () => {
  const [selectedTutorial, setSelectedTutorial] = useState(null);

  const renderTutorial = () => {
    switch (selectedTutorial) {
      case "html":
        return <HtmlTutorial />;
      case "css":
        return <CssTutorial />;
      case "javascript":
        return <JavaScriptTutorial />;
      default:
        return null;
    }
  };

  const handleTutorialSelection = (tutorial) => {
    setSelectedTutorial((prevTutorial) =>
      prevTutorial === tutorial ? null : tutorial
    );
  };

  return (
    <Router>
      <section id="teach" className="teach-section p-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-yellow-500">
            Learn HTML, CSS, and JavaScript
          </h2>
          <p className="text-lg mb-6 text-center text-gray-300">
            Start your journey to becoming a web developer
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="teach-card flex flex-col items-center space-y-4 p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold">HTML</h3>
              <button
                onClick={() => handleTutorialSelection("html")}
                className="px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-md transition duration-300"
              >
                {selectedTutorial === "html"
                  ? "Hide Tutorial"
                  : "Start Learning"}
              </button>
            </div>
            <div className="teach-card flex flex-col items-center space-y-4 p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold">CSS</h3>
              <button
                onClick={() => handleTutorialSelection("css")}
                className="px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-md transition duration-300"
              >
                {selectedTutorial === "css"
                  ? "Hide Tutorial"
                  : "Start Learning"}
              </button>
            </div>
            <div className="teach-card flex flex-col items-center space-y-4 p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold">JavaScript</h3>
              <button
                onClick={() => handleTutorialSelection("javascript")}
                className="px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-md transition duration-300"
              >
                {selectedTutorial === "javascript"
                  ? "Hide Tutorial"
                  : "Start Learning"}
              </button>
            </div>
          </div>
        </div>
      </section>
      {renderTutorial()}
    </Router>
  );
};

export default TeachHtml;
