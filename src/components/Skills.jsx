import React from 'react';

const Skills = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <p className="text-gray-600">React, JavaScript, HTML, CSS</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <p className="text-gray-600">Node.js, Python, Databases</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Tools</h3>
            <p className="text-gray-600">Git, VS Code, Figma</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
