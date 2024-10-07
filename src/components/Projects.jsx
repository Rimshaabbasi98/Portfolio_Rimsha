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
<section id="Projects" className="w-full h-auto md:h-screen bg-gray-200 py-12 lg:py-24">      
  <div className="container w-[80%] mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects <span className="block h-1 w-24 bg-sky-400 mt-2 mx-auto rounded"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Link to={project.preview} target="_blank">
                <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="text-gray-600">{project.technologies}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
