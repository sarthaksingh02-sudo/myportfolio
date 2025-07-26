import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane, HiOfficeBuilding } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Hardcoded personal info to avoid dependency issues
  const personalInfo = {
    email: "sarthaksinghxiia1410@gmail.com",
    phone: "+91-9415707845",
    location: "Gurugram, Haryana, India",
    github: "https://github.com/sarthaksingh02-sudo",
    linkedin: "https://www.linkedin.com/in/sarthak-singh-006758268/"
  };

  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'text-blue-600'
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'text-green-600'
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      color: 'text-purple-600'
    }
  ];

  const socialLinks = [
    { 
      icon: FaGithub, 
      href: personalInfo.github, 
      label: 'GitHub',
      color: 'hover:bg-gray-800'
    },
    { 
      icon: FaLinkedin, 
      href: personalInfo.linkedin, 
      label: 'LinkedIn',
      color: 'hover:bg-blue-600'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can integrate with email service)
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Let's <span className="text-blue-600">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interested in collaborating on AI/ML projects, quantum computing research, or discussing innovative tech solutions? 
            I'm always excited to connect with fellow researchers and developers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <item.icon className={`text-2xl ${item.color} mr-4`} />
                  <div>
                    <p className="font-semibold text-gray-800">{item.label}</p>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Current Status */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                <HiOfficeBuilding className="text-blue-800 mr-2" />
                Current Status
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                🔥 Currently working as <span className="font-semibold text-blue-800">IBM Intern</span> on Emotion Recognition from Voice for Mental Health Monitoring<br/>
                🎓 Pursuing B.Tech AIML at <span className="font-semibold">GD Goenka University</span><br/>
                ⚛️ Researching <span className="font-semibold text-purple-600">Quantum Computing</span> applications<br/>
                💼 Open for research collaborations and internship opportunities
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-bold text-gray-800 mb-4">Connect on Social</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                    placeholder="Your Full Name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder="Research Collaboration / Project Discussion / etc."
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors resize-none"
                  placeholder="Tell me about your project, research idea, or how we can collaborate..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center"
              >
                <HiPaperAirplane className="mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
