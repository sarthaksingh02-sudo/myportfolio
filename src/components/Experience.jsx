import React from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase, HiAcademicCap, HiBadgeCheck, HiStar, HiOfficeBuilding, HiLocationMarker } from 'react-icons/hi';

const Experience = () => {
  const experiences = [
    {
      title: "IBM Intern",
      company: "IBM",
      duration: "June 2024 - Present (1 year 2 months)",
      location: "Gurugram, Haryana, India",
      description: `Developed and deployed a sentiment analysis model to classify over 1.6 million tweets into positive, 
      negative, and neutral sentiments. Leveraged Python and key libraries such as NLTK, Pandas, and Scikit-learn for 
      data preprocessing, feature extraction, and model training. The project provided actionable insights into public 
      sentiment trends and demonstrated proficiency in machine learning and natural language processing techniques.`,
      skills: ["Python", "NLTK", "Pandas", "Scikit-learn", "NLP", "Sentiment Analysis", "Data Preprocessing"],
      type: "internship"
    },
    {
      title: "Assistant Head Web and Tech",
      company: "Avishkar Innovation Centre, GD Goenka University",
      duration: "March 2025 - Present (5 months)",
      location: "Gurugram, Haryana, India",
      description: `Leading web development and technology initiatives at the university's innovation center. 
      Responsible for managing tech projects, mentoring students, and driving innovation in AI/ML applications.`,
      skills: ["Web Development", "Team Leadership", "Project Management", "AI/ML Innovation"],
      type: "leadership"
    }
  ];

  const education = {
    degree: "Bachelor of Technology - AI & Machine Learning",
    university: "GD Goenka University",
    duration: "September 2023 - July 2027",
    location: "Gurugram, Haryana, India"
  };

  const certifications = [
    {
      title: "Quantum Quest",
      issuer: "Department of Physics, Akal University", 
      year: "2024",
      type: "Quantum Computing"
    },
    {
      title: "How AI Thinks",
      issuer: "Online Certification Platform",
      year: "2024", 
      type: "Artificial Intelligence"
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Coursera/Stanford University",
      year: "2024",
      type: "Machine Learning"
    }
  ];

  const achievements = [
    {
      title: "National Quantum Mission Participant", 
      description: "Selected participant in IIT Kanpur's National Quantum Mission initiative",
      year: "2024"
    },
    {
      title: "IBM Internship Achievement",
      description: "Successfully processed and analyzed 1.6+ million tweets for sentiment analysis",
      year: "2024"
    },
    {
      title: "University Innovation Leader",
      description: "Appointed as Assistant Head of Web and Tech at Avishkar Innovation Centre",
      year: "2025"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Professional <span className="text-blue-600">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic and professional experience in AI, ML, and Quantum Computing
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-6 lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              <HiBriefcase className="text-3xl text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Professional Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-200 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-gray-800 text-lg">{exp.title}</h4>
                    <HiOfficeBuilding className="text-2xl text-blue-800 flex-shrink-0" />
                  </div>
                  
                  <p className="text-blue-600 font-semibold">{exp.company}</p>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <span className="mr-3">{exp.duration}</span>
                    <HiLocationMarker className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-3 leading-relaxed">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center mb-6">
              <HiAcademicCap className="text-3xl text-green-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-800">Education</h3>
            </div>
            
            <div className="border-l-4 border-green-200 pl-4">
              <h4 className="font-bold text-gray-800">{education.degree}</h4>
              <p className="text-green-600 font-semibold">{education.university}</p>
              <p className="text-gray-600 text-sm">{education.duration}</p>
              <p className="text-gray-600 text-sm flex items-center">
                <HiLocationMarker className="mr-1" />
                {education.location}
              </p>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold text-gray-800 mb-3">Research Focus:</h5>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Emotion Prediction Models</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">Quantum Computing Research</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-gray-700 text-sm">NLP & Sentiment Analysis</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications & Achievements Combined */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            {/* Certifications */}
            <div className="flex items-center mb-4">
              <HiBadgeCheck className="text-2xl text-purple-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">Certifications</h3>
            </div>
            
            <div className="space-y-3 mb-6">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-2 border-purple-200 pl-3">
                  <h5 className="font-semibold text-gray-800 text-sm">{cert.title}</h5>
                  <p className="text-purple-600 text-xs">{cert.issuer}</p>
                  <p className="text-gray-600 text-xs">{cert.year}</p>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="flex items-center mb-3 pt-4 border-t border-gray-100">
              <HiStar className="text-2xl text-yellow-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">Key Achievements</h3>
            </div>
            
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="border-l-2 border-yellow-200 pl-3">
                  <h5 className="font-semibold text-gray-800 text-sm">{achievement.title}</h5>
                  <p className="text-gray-600 text-xs leading-relaxed">{achievement.description}</p>
                  <p className="text-yellow-600 text-xs font-medium">{achievement.year}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
