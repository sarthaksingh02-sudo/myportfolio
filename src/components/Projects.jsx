import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink, HiCode, HiStar, HiClock, HiCheckCircle, HiUsers, HiAcademicCap } from 'react-icons/hi';
import { ongoingProjects, completedProjects } from '../data/portfolioData';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('ongoing');
  const [filter, setFilter] = useState('All');
  
  const currentProjects = activeTab === 'ongoing' ? ongoingProjects : completedProjects;
  const allCategories = ['All', ...new Set(currentProjects.map(project => project.category))];
  const filteredProjects = filter === 'All' 
    ? currentProjects 
    : currentProjects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="text-blue-600">Innovation Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Exploring the frontiers of emotion recognition, mental health technology, and human-computer interaction 
            through innovative AI/ML solutions that make a meaningful difference in people's lives.
          </p>
        </motion.div>

        {/* Project Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-full p-1 inline-flex">
            <button
              onClick={() => {setActiveTab('ongoing'); setFilter('All');}}
              className={`px-6 py-3 rounded-full font-medium transition-all flex items-center ${
                activeTab === 'ongoing'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              <HiClock className="mr-2" />
              Ongoing Research ({ongoingProjects.length})
            </button>
            <button
              onClick={() => {setActiveTab('completed'); setFilter('All');}}
              className={`px-6 py-3 rounded-full font-medium transition-all flex items-center ${
                activeTab === 'completed'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              <HiCheckCircle className="mr-2" />
              Completed Projects ({completedProjects.length})
            </button>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                filter === category
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border border-gray-100 group"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/api/placeholder/800/600';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  {activeTab === 'ongoing' ? (
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <HiClock className="mr-1" />
                      {project.status}
                    </div>
                  ) : (
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <HiCheckCircle className="mr-1" />
                      Completed
                    </div>
                  )}
                </div>

                {/* Featured/Achievement Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <HiStar className="mr-1" />
                    Featured
                  </div>
                )}
                
                {project.achievement && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">
                    {project.achievement}
                  </div>
                )}

                {/* Category */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                  {project.description}
                </p>

                {/* Company/Date Info */}
                {project.company && (
                  <div className="flex items-center text-blue-600 text-sm font-medium mb-2">
                    <HiAcademicCap className="mr-1" />
                    {project.company}
                  </div>
                )}
                
                {project.completedDate && (
                  <div className="text-green-600 text-sm font-medium mb-3">
                    Completed: {project.completedDate}
                  </div>
                )}

                {/* Team Members */}
                {project.teamMembers && (
                  <div className="mb-3">
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <HiUsers className="mr-1" />
                      Team Members:
                    </div>
                    <div className="text-xs text-gray-500">
                      {project.teamMembers.join(', ')}
                    </div>
                    {project.mentor && (
                      <div className="text-xs text-purple-600 mt-1">
                        Mentor: {project.mentor}
                      </div>
                    )}
                  </div>
                )}

                {/* Impact */}
                {project.impact && (
                  <div className="bg-blue-50 rounded-lg p-3 mb-4">
                    <p className="text-blue-800 text-sm font-medium">
                      💡 Impact: {project.impact}
                    </p>
                  </div>
                )}
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
                
                {/* Links */}
                <div className="flex gap-3 pt-2 border-t border-gray-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm"
                  >
                    <HiCode className="mr-1" />
                    Code
                  </a>
                  
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-purple-600 transition-colors font-medium text-sm"
                    >
                      <HiExternalLink className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Interested in Collaborating?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm always excited to work on innovative projects in emotion recognition, mental health technology, 
            and AI/ML applications. Let's build something meaningful together!
          </p>
          <a
            href="https://github.com/sarthaksingh02-sudo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
          >
            <HiCode className="mr-2" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
