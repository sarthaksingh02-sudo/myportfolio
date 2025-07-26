import React from 'react';
import { motion } from 'framer-motion';
import { HiBadgeCheck, HiDownload, HiExternalLink, HiStar, HiAcademicCap } from 'react-icons/hi';
import { FaUniversity, FaCertificate, FaPython } from 'react-icons/fa'; // ✅ Use Font Awesome icons instead

const Certifications = () => {
  // Inline certifications data to avoid import issues
  const certifications = [
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Coursera/Stanford University",
      year: "2024",
      type: "Machine Learning",
      certificateUrl: "/certificates/machine-learning-certificate.pdf",
      featured: true,
      skills: ["Machine Learning", "Python", "Regression", "Classification", "Data Science"],
      description: "Comprehensive course covering supervised learning algorithms, regression techniques, and classification methods"
    },
    {
      title: "Quantum Quest",
      issuer: "Department of Physics, Akal University", 
      year: "2024",
      type: "Quantum Computing",
      skills: ["Quantum Computing", "Physics", "Research"]
    },
    {
    title: "How AI Thinks",
    issuer: "AI Education Platform",
    year: "2025", 
    type: "Artificial Intelligence",
    certificateUrl: "/certificates/how-ai-thinks-certificate.pdf", 
    verificationUrl: "https://credsverse.com/credentials/5543a589-440f-40c7-95a7-a83ec820fd97", 
    featured: false,
    skills: ["Artificial Intelligence", "Neural Networks", "Deep Learning", "AI Ethics", "Cognitive Computing"],
    description: "Comprehensive exploration of AI principles, neural networks, and cognitive computing concepts supporting emotion recognition research."
  }
  ];

  const getCertificationIcon = (issuer, type) => {
    if (issuer.includes('Coursera') || issuer.includes('Stanford')) return FaUniversity;
    if (issuer.includes('University')) return HiAcademicCap;
    if (type === 'Machine Learning') return FaPython;
    return FaCertificate;
  };

  const getCertificationColor = (type) => {
    switch(type) {
      case 'Machine Learning': return 'bg-blue-500';
      case 'Quantum Computing': return 'bg-purple-500';
      case 'Artificial Intelligence': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Professional <span className="text-blue-600">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Continuous learning and professional development in AI, ML, and emerging technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = getCertificationIcon(cert.issuer, cert.type);
            const colorClass = getCertificationColor(cert.type);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all group relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -mr-10 -mt-10"></div>
                
                {/* Featured Badge */}
                {cert.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold flex items-center">
                    <HiStar className="mr-1" />
                    Featured
                  </div>
                )}

                {/* Certificate Type Badge */}
                <div className={`inline-block ${colorClass} text-white px-3 py-1 rounded-full text-sm font-medium mb-4`}>
                  {cert.type}
                </div>

                {/* Icon and Title */}
                <div className="flex items-start mb-4">
                  <IconComponent className="text-3xl text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-blue-600 font-semibold text-sm">{cert.issuer}</p>
                  </div>
                </div>

                {/* Description */}
                {cert.description && (
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                )}

                {/* Skills Tags */}
                {cert.skills && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          +{cert.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Footer */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-gray-500 font-medium">{cert.year}</span>
                  
                {/* Certificate Actions */}
<div className="flex gap-2">
  {cert.certificateUrl && (
    <a
      href={cert.certificateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors p-2 rounded-lg hover:bg-blue-50"
      title="View Certificate"
    >
      <HiDownload className="w-5 h-5" />
    </a>
  )}
                    
                    {cert.issuer.includes('Coursera') && (
                      <a
                        href="https://www.coursera.org/account/accomplishments/verify/PI9OW43YT83R"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-green-600 hover:text-green-800 transition-colors p-2 rounded-lg hover:bg-green-50"
                        title="Verify on Coursera"
                      >
                        <HiExternalLink className="w-5 h-5" />
                      </a>
                    )} {/* ✅ How AI Thinks Verification */}
  {cert.title.includes('How AI Thinks') && cert.verificationUrl && (
    <a
      href={cert.verificationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-purple-600 hover:text-purple-800 transition-colors p-2 rounded-lg hover:bg-purple-50"
      title="Verify Certificate"
    >
      <HiExternalLink className="w-5 h-5" />
    </a>
  )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <HiBadgeCheck className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Committed to Continuous Learning
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            These certifications represent my dedication to staying current with the latest developments 
            in AI, ML, and technology innovation.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://github.com/sarthaksingh02-sudo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
            >
              <HiExternalLink className="mr-2" />
              View Projects on GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sarthak-singh-006758268/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all"
            >
              <HiAcademicCap className="mr-2" />
              View All Certifications on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
