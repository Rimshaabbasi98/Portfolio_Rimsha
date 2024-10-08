import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaLaptopCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const LeftNav = () => {
  return (
    <motion.div
      className="fixed left-5 top-1/3 transform -translate-y-1/2 flex flex-col space-y-4 z-50"
      initial={{ x: -150, opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
    >
      <NavItem icon={<FaHome />} title="Home" href="#Home" />
      <NavItem icon={<FaUser />} title="About" href="#About" />
      <NavItem icon={<FaLaptopCode />} title="Skills" href="#Skills" />
      <NavItem icon={<FaProjectDiagram />} title="Projects" href="#Projects" />
      <NavItem icon={<FaEnvelope />} title="Contact" href="#Contact" />
    </motion.div>
  );
};

const NavItem = ({ icon, title, href }) => (
  <Link 
    to={href.substring(1)}
    smooth={true}
    duration={500}
    className="group flex items-center cursor-pointer"
  >
    <div className="text-white text-2xl p-3 rounded-full bg-gray-800 group-hover:bg-sky-400 transition duration-300">
      {icon}
    </div>
    <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white bg-sky-400 p-2 rounded-md">
      {title}
    </span>
  </Link>
);
export default LeftNav;