import "./UniqueInfo.css";

const UniqueInfo = () => {
  return (
    <section className="unique-info-section p-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-600">
          More About Me
        </h2>
        <p className="mb-4 text-2xl font-semibold">
          My name is Ahmad Raza, I am a Software Engineer.
        </p>
        <p className=" font-sans">
          I thrive on working on challenging projects and am committed to
          continuous learning and professional growth. In my free time, I enjoy
          reading tech blogs and staying updated with the latest trends in web
          development. If you require any web development services or
          consultation, feel free to reach out. I am always excited to
          collaborate on new projects and help bring your ideas to life.
        </p>
        <p className="mb-6  ">
          You can also reach me on WhatsApp:{" "}
          <div className="shake-vertical">
            <a
              href="https://wa.me/+923238388294"
              target="_blank"
              rel="noopener noreferrer"
              className="   text-green-500 hover:text-green-700 hover:scale-110 "
            >
              +92 323 8388294
            </a>
          </div>
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Ahmadraza1394"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transform hover:scale-110 transition duration-300"
          >
            <i className="fab fa-github w-6 h-6"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ahmad-raza-b77408222/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-900 transform hover:scale-110 transition duration-300"
          >
            <i className="fab fa-linkedin w-6 h-6"></i>
          </a>
          <a
            href="https://www.fiverr.com/s/LdB19pY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-200 transform hover:scale-110 transition duration-300"
          >
            <img src="./images/Fiverr.jpg" alt="Fiverr" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default UniqueInfo;
