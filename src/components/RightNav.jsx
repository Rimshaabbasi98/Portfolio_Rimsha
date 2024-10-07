import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaFacebookF, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const RightNav = () => {
  return (
    <motion.div
      className="fixed right-5 top-1/3 transform -translate-y-1/2 flex flex-col space-y-4 z-50"
      initial={{ x: 150, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }} 
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
    >
      <SocialNavItem icon={<FaLinkedin />} href="https://www.linkedin.com/in/rimsha-abbasi-9982ba22b/" />
      <SocialNavItem icon={<FaInstagram />} href="https://www.instagram.com" />
      <SocialNavItem icon={<FaGithub />} href="https://github.com/Rimshaabbasi98" />
      <SocialNavItem icon={<FaEnvelope />} href="mailto:r.abbasi20980@gmail.com" />
      <SocialNavItem icon={<FaFacebookF />} href="https://www.facebook.com" />
    </motion.div>
  );
};

const SocialNavItem = ({ icon, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-2xl p-3 rounded-full bg-gray-800 hover:bg-sky-400 transition duration-300 cursor-pointer"
    whileHover={{ scale: 1.2 }}
  >
    {icon}
  </motion.a>
);

export default RightNav;
