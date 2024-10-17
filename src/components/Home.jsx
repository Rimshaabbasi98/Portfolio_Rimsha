import React from 'react';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import { TypeAnimation } from 'react-type-animation';
import banner from '../components/../assets/Hero_image.jpg';

const Home = () => {
  return (
    <section
      id="Home"
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('${banner}')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <LeftNav />
      <RightNav />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        
        <h1 className="text-5xl md:text-7xl font-semibold mb-4">
          Rimsha Abbasi
        </h1>

        <TypeAnimation
          sequence={[
            'I am a WEB DEVELOPER', 2000,
            'I am a FRONTEND DEVELOPER', 2000,
            'I am a PROJECT MANAGER', 2000,
          ]}
          wrapper="h1"
          cursor={true}
          repeat={Infinity}
          className="text-3xl md:text-5xl font-semibold mb-6"
        />

        <a href="/Rimsha-CV.docx" download>
          <button className="mt-8 px-6 py-3 text-lg font-semibold text-white border border-white rounded hover:bg-sky-400 hover:text-black transition duration-300">
            Download Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default Home;
