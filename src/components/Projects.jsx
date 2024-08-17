import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Digital Agency Website",
    imageUrl: "/images/digital.png",
    link: "https://digitalmarkeeting.netlify.app/",
    icon: "fas fa-code",
  },
  {
    id: 2,
    title: "Sufficient Website",
    imageUrl: "/images/sufficient.png",
    link: "https://sufficient.netlify.app/",
    icon: "fas fa-laptop-code",
  },
  {
    id: 3,
    title: "XMO AI Website",
    imageUrl: "/images/xmo.png",
    link: "https://www.xmo.ai/",
    icon: "fas fa-user-shield",
  },
  {
    id: 4,

    title: "Electro Santos Website",
    imageUrl: "/images/electorsantos.png",
    link: "https://electrosantos.netlify.app/",
    icon: "fas fa-cloud",
  },
  {
    id: 5,
    title: "Cruisecarfly Website",
    imageUrl: "/images/cruisecarfly.png",
    link: "https://cruisecarfly.com",
    icon: "fas fa-car",
  },

  {
    id: 6,
    title: "Only Class Website",
    imageUrl: "/images/onlyclass.png",
    link: "https://onlyclass.netlify.app/",
    icon: "fas fa-globe",
  },
  {
    id: 7,
    title: "Standing Desk",
    imageUrl: "/images/standingdesk.png",
    link: "https://standingdeskltd.netlify.app/",
    icon: "fas fa-network-wired",
  },
  {
    id: 8,
    title: "Happy Tails Website",
    imageUrl: "/images/happytails.png",
    link: "https://happytailsweb.netlify.app",
    icon: "fas fa-shield-alt",
  },
  {
    id: 9,
    title: "Shopping Managment System",
    imageUrl: "/images/shopping.png",

    link: "https://shoppingmanagment.netlify.app/",
    icon: "fas fa-database",
  },
  {
    id: 10,
    title: "Global Gardening Website",
    imageUrl: "/images/gardening.png",

    link: "https://globalgardening.netlify.app/",
    icon: "fas fa-project-diagram",
  },
  {
    id: 11,
    title: "Clean Water Website",
    imageUrl: "/images/cleanwater.png",

    link: "https://cleanwaterweb.netlify.app/",
    icon: "fas fa-mobile-alt",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section p-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-yellow-500">
          Projects
        </h2>
        <p className="text-lg mb-6 text-center text-gray-300">
          These are some of my recent projects
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="projects-card flex flex-col items-center space-y-4 p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <div className="flex items-center space-x-2">
                <i
                  className={`${project.icon} project-icon text-yellow-400 pulsate-bck`}
                ></i>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <button
                onClick={() => window.open(project.link, "_blank")}
                className="px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold rounded-md transition duration-300"
              >
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
