import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import Portfolio from '../components/../assets/project.webp';

const projects = [
  {
    id: 1,
    name: "Plant Palace",
    technologies: "MERN Stack | React.js",
    image: Portfolio,
    preview: "https://your-preview-url.com/plant-palace", // Replace with your project preview URL
  },
  {
    id: 2,
    name: "School's Info",
    technologies: "MERN Stack | React.js | Tailwind CSS",
    image: Portfolio,
    preview: "https://your-preview-url.com/schools-info", // Replace with your project preview URL
  },
  {
    id: 3,
    name: "CRUD",
    technologies: "MERN Stack | React.js | Tailwind CSS",
    image: Portfolio,
    preview: "https://your-preview-url.com/crud", // Replace with your project preview URL
  },
];

const Projects = () => {
  return (
    <section id="Projects" className="w-full h-screen bg-gray-100 py-12 lg:py-24">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects <span className="block h-1 w-24 bg-sky-400 mt-2 mx-auto rounded"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
              initial={{
                opacity: 0,
                x: project.id === 1 ? -50 : project.id === 2 ? 0 : 50,
                y: project.id === 2 ? -50 : 0,
              }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
            >
              {project.image && (
                <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105" />
              )}
              <h3 className="text-2xl font-semibold mb-1">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.technologies}</p>
              <Link 
                to={project.preview} 
                className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold px-4 py-2 rounded-full transition-colors duration-300"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Preview
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
