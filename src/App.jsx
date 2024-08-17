import { useRef } from "react";
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

function App() {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Introduction scrollToProjects={scrollToProjects} />
      <hr />
      <Skills />
      <hr />
      <section className="-mt-7" ref={projectsRef}>
        <Projects />
      </section>
      <hr />
      <TeachHtml />
      {/* <hr />
      <HtmlTutorial />
      <hr />
      <CSSTutorial />
      <hr />
      <JsTutorial /> */}
      <hr />
      <ContactForm />
      <hr />
      <UniqueInfo />
    </div>
  );
}

export default App;
