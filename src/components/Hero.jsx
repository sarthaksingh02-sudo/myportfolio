import React from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiMail, HiCode } from 'react-icons/hi';
import { SiKaggle, SiPython, SiTensorflow } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';
import profilePhoto from '../assets/profile-photo.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <img
            src={profilePhoto}
            alt="Sarthak Singh"
            className="w-40 h-40 rounded-full mx-auto mb-8 object-cover border-4 border-white shadow-xl"
          />
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sarthak</span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-gray-700 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {personalInfo.title}
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-blue-600 font-medium mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {personalInfo.subtitle}
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            IBM Intern with experience in analyzing <span className="text-blue-600 font-semibold">1.6+ million tweets</span> using advanced NLP techniques. 
            Currently pursuing <span className="text-purple-600 font-semibold">B.Tech in AI & ML</span> at GD Goenka University and participating in 
            <span className="text-indigo-600 font-semibold"> National Quantum Mission</span> research initiatives.
          </motion.p>
          
          {/* Tech Icons */}
          <motion.div 
            className="flex justify-center space-x-6 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            <SiPython className="text-4xl text-blue-500" />
            <SiTensorflow className="text-4xl text-orange-500" />
            <HiCode className="text-4xl text-green-500" />
            <SiKaggle className="text-4xl text-cyan-500" />
          </motion.div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={personalInfo.resume}
              download="Sarthak-Singh-AIML-Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
            >
              <HiDownload className="mr-2" />
              Download Resume
            </motion.a>
            
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-medium rounded-xl hover:bg-blue-600 hover:text-white transition-all"
            >
              <HiMail className="mr-2" />
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
