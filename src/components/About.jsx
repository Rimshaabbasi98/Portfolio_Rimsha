import React from 'react';
import { FaGraduationCap, FaBriefcase, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    
    <section id="About" className="w-full h-auto md:h-screen bg-gray-200 py-12 lg:py-24">
      <div className="container mx-auto px-4 w-full md:w-4/5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me{' '}
          <span className="block h-1 w-24 bg-sky-400 mt-2 mx-auto rounded"></span>
        </h2>

        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <motion.div
            className="lg:w-1/2 mb-8 lg:mb-0"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <FaUser className="text-sky-400 mr-2" /> About Me
              </h3>
              <div className="border-l-4 border-sky-400 pl-4">
                <p className="text-gray-700 font-semibold">
                  Hi, I’m <span className="text-sky-400">Rimsha Abbasi</span>, a passionate web developer with experience as a project manager and frontend developer primarily focusing on frontend development. I also possess a strong understanding of backend technologies, making me a full-stack developer. I enjoy transforming complex challenges into simple, beautiful, and user-friendly solutions. I’m eager to contribute to innovative projects that create impactful user experiences.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
              <div className="border-l-4 border-sky-400 pl-4">
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <FaGraduationCap className="text-sky-400 mr-2" /> Qualifications
                </h3>
                <h4 className="text-xl font-bold">Bachelor’s Degree in Commerce</h4>
                <p className="text-gray-700 pb-5">- Karachi University, 2019</p>

                <h4 className="text-xl font-bold">Full Stack Development Course</h4>
                <p className="text-gray-700">- Aptech, Ongoing</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <FaBriefcase className="text-sky-400 mr-2" /> Professional Experience
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-sky-400 pl-4">
                  <h4 className="text-xl font-bold">Project Manager</h4>
                  <p className="text-gray-700">January 2022 - Present</p>
                  <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Led project teams in building and optimizing complex websites.</li>
                    <li>Coordinated with design teams to deliver interactive and user-centric UI components.</li>
                    <li>Managed timelines and resources to ensure project delivery within deadlines.</li>
                  </ul>
                </div>
                <div className="border-l-4 border-sky-400 pl-4">
                  <h4 className="text-xl font-bold">Front-End Developer Intern</h4>
                  <p className="text-gray-700">January 2022 - May 2023</p>
                  <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Assisted in creating and optimizing website components.</li>
                    <li>Collaborated with designers to implement interactive UI features.</li>
                    <li>Gained hands-on experience with front-end technologies and best practices.</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
