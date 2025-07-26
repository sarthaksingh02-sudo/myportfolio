import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiStar, HiDownload, HiPhotograph, HiUsers, HiAcademicCap, HiBadgeCheck } from 'react-icons/hi';
import { FaTrophy } from 'react-icons/fa'; // ✅ Use trophy from Font Awesome instead

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  // Inline achievements data to avoid import issues
  const achievements = [
    {
      title: "RBI90 Quiz Regional Qualifier",
      description: "Selected at regional level for the prestigious RBI90 Quiz competition commemorating Reserve Bank of India's 90th anniversary, demonstrating excellence in banking, finance, and economic knowledge",
      year: "2024",
      category: "Academic Excellence",
      partner: "Manish Tiwari",
      level: "Regional Level",
      organizer: "Reserve Bank of India",
      skills: ["Financial Literacy", "Banking Knowledge", "Economic Awareness", "Team Collaboration"]
    },
    {
      title: "Unity 3D Competition Winner", 
      description: "First place in university-wide AR/VR development competition with team AR-VERSE for creating detailed 3D campus model",
      year: "2024",
      category: "Competition",
      achievement: "🏆 First Place",
      teamMembers: ["Himanshu Majumdar", "Hritesh", "Samit Singh Bag"],
      mentor: "Prof. Gadu Srinivasrao"
    },
    {
      title: "IBM Summer Internship Impact",
      description: "Successfully analyzed 1.6M+ tweets, delivering actionable insights for sentiment trend analysis during summer internship",
      year: "2024",
      category: "Professional",
      company: "IBM"
    },
    {
      title: "Mental Health Technology Pioneer",
      description: "Leading innovative research in voice-based emotion recognition and wearable emotion detection systems for mental health applications",
      year: "2025",
      category: "Research"
    },
    {
      title: "Innovation Leadership",
      description: "Appointed as Assistant Head of Web and Tech at university's Avishkar Innovation Centre",
      year: "2025",
      category: "Leadership"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <FaTrophy className="inline mr-3 text-yellow-600" />
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrating milestones in academic excellence, professional achievements, and innovation leadership.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all cursor-pointer group"
              onClick={() => setSelectedAchievement(achievement)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <FaTrophy className="text-2xl text-yellow-600 mr-3" />
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    {achievement.category}
                  </span>
                </div>
                {achievement.achievement && (
                  <div className="text-yellow-600 text-sm font-bold">
                    {achievement.achievement}
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                {achievement.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {achievement.description}
              </p>

              {/* Additional Details */}
              <div className="space-y-2 mb-4">
                {achievement.partner && (
                  <div className="flex items-center text-blue-600 text-sm">
                    <HiUsers className="mr-1" />
                    Partner: {achievement.partner}
                  </div>
                )}

                {achievement.level && (
                  <div className="text-green-600 font-medium text-sm">
                    Level: {achievement.level}
                  </div>
                )}

                {achievement.company && (
                  <div className="flex items-center text-purple-600 text-sm">
                    <HiAcademicCap className="mr-1" />
                    {achievement.company}
                  </div>
                )}

                {achievement.teamMembers && (
                  <div className="text-gray-600 text-sm">
                    <div className="flex items-center mb-1">
                      <HiUsers className="mr-1" />
                      Team:
                    </div>
                    <div className="pl-4 text-xs">
                      {achievement.teamMembers.join(', ')}
                    </div>
                    {achievement.mentor && (
                      <div className="pl-4 text-xs text-purple-600 mt-1">
                        Mentor: {achievement.mentor}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Action Buttons & Year */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-gray-500 text-sm font-medium">{achievement.year}</span>
                
                {achievement.title.includes('RBI90') && (
                  <div className="flex gap-3">
                    <button 
                      className="text-blue-600 hover:text-blue-800 transition-colors p-2 rounded-lg hover:bg-blue-50"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Open certificate PDF
                        window.open('/certificates/rbi90-quiz-certificate.pdf', '_blank');
                      }}
                      title="View Certificate"
                    >
                      <HiDownload className="w-5 h-5" />
                    </button>
                    <button 
                      className="text-purple-600 hover:text-purple-800 transition-colors p-2 rounded-lg hover:bg-purple-50"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Open photo gallery modal
                        alert('Photo gallery feature coming soon!');
                      }}
                      title="View Event Photos"
                    >
                      <HiPhotograph className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Skills Tags */}
              {achievement.skills && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {achievement.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {achievement.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                        +{achievement.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200"
        >
          <FaTrophy className="text-4xl text-yellow-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Building Excellence Through Innovation
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Each achievement represents a step forward in my journey of combining technical expertise 
            with meaningful impact in AI/ML, mental health technology, and academic excellence.
          </p>
          <div className="flex justify-center gap-4">
            
            <a
              href="https://www.linkedin.com/in/sarthak-singh-006758268/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-yellow-600 text-yellow-700 font-medium rounded-lg hover:bg-yellow-600 hover:text-white transition-all"
            >
              <HiAcademicCap className="mr-2" />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
