// Updated with Sarthak Singh's actual project information
export const personalInfo = {
  name: "Sarthak Singh",
  title: "AI/ML Student & Mental Health Tech Innovator",
  subtitle: "Specializing in Emotion Recognition & Healthcare AI Solutions",
  tagline: "Building technology that understands human emotions to improve mental wellness and communication",
  email: "sarthaksinghxiia1410@gmail.com",
  phone: "+91-9415707845",
  location: "Gurugram, Haryana, India",
  github: "https://github.com/sarthaksingh02-sudo",
  linkedin: "https://www.linkedin.com/in/sarthak-singh-006758268/",
  resume: "/resume.pdf"
};

export const aboutMe = {
  description: `AI/ML student at GD Goenka University with a passion for developing technology that bridges the gap between 
  human emotions and digital communication. My work focuses on creating innovative solutions for mental health monitoring 
  and emotional intelligence systems that can truly understand and respond to human feelings.
  
  Through my research and projects, I'm exploring how artificial intelligence can be used to detect, interpret, and 
  communicate emotions in ways that enhance human connection and support mental wellness.`,
  
  highlights: [
    "🎓 B.Tech AIML Student at GD Goenka University",
    "🧠 Mental Health Technology Innovator",
    "🎤 Voice-Based Emotion Recognition Researcher",
    "⌚ Wearable Emotion Detection Specialist",
    "💼 IBM Summer Intern (NLP & Sentiment Analysis)",
    "🏆 Unity 3D Modeling Competition Winner"
  ],
  
  education: {
    degree: "Bachelor of Technology - AI & Machine Learning",
    university: "GD Goenka University",
    duration: "September 2023 - July 2027",
    location: "Gurugram, Haryana, India"
  },
  
  researchInterests: [
    "Emotion Recognition from Voice Signals",
    "Wearable Technology for Mental Health",
    "Natural Language Processing for Healthcare",
    "Sentiment Analysis & Social Media Analytics",
    "AR/VR Applications in Education",
    "Human-Computer Interaction"
  ]
};

export const skills = {
  "AI/ML & Healthcare": [
    "Emotion Recognition", "Voice Signal Processing", "Mental Health Analytics",
    "Wearable Technology", "Healthcare AI", "Biomedical Data Analysis"
  ],
  "Programming & Development": [
    "Python", "JavaScript", "React", "Unity 3D", "API Development",
    "Web Development", "Mobile Applications"
  ],
  "Data Science & NLP": [
    "Natural Language Processing", "Sentiment Analysis", "NLTK", "Pandas",
    "Scikit-learn", "TensorFlow", "Data Preprocessing", "Statistical Analysis"
  ],
  "Tools & Platforms": [
    "Firebase", "Kaggle", "Jupyter Notebooks", "Git", "VS Code",
    "Unity 3D", "AR/VR Development", "Spotify API"
  ],
  "Soft Skills": [
    "Research & Innovation", "Team Collaboration", "Problem Solving",
    "Project Management", "Technical Writing", "Mentorship"
  ]
};

// Ongoing Projects
export const ongoingProjects = [
  {
    id: 1,
    title: "Emotion Recognition from Voice for Mental Health Monitoring",
    description: `Developing an advanced AI system that analyzes vocal patterns and speech characteristics to detect emotional 
    states and mental health indicators. This research aims to create early detection systems for depression, anxiety, and 
    other mental health conditions through non-invasive voice analysis, potentially revolutionizing how we approach mental 
    healthcare screening and monitoring.`,
    image: "/project-voice-emotion.jpg",
    tech: ["Python", "TensorFlow", "Speech Processing", "Machine Learning", "Healthcare AI", "Signal Processing"],
    github: "https://github.com/sarthaksingh02-sudo/voice-emotion-recognition",
    status: "In Progress",
    category: "Mental Health AI",
    impact: "Early detection and monitoring of mental health conditions"
  },
  {
    id: 2,
    title: "EMPATH: Wearable Emotion-to-Text Communication System",
    description: `Revolutionary wearable technology that detects emotional states through physiological sensors and translates 
    them into contextual text messages. This system helps bridge communication gaps by allowing receivers to understand the 
    sender's true emotional state, enhancing empathy and meaningful connections in digital communication. The project combines 
    IoT sensors, machine learning, and natural language generation to create authentic emotional expression.`,
    image: "/project-empath.jpg",
    tech: ["IoT Sensors", "Wearable Tech", "Firebase", "Machine Learning", "NLP", "Real-time Processing"],
    github: "https://github.com/sarthaksingh02-sudo/empath-system",
    status: "In Development",
    category: "Wearable Technology",
    impact: "Enhanced emotional communication and empathy in digital interactions"
  }
];

// Completed Projects
export const completedProjects = [
  {
    id: 3,
    title: "Voice Emotion Recognition Web Application",
    description: `Developed a comprehensive web application that demonstrates real-time emotion recognition from voice inputs. 
    The platform features an intuitive interface where users can record voice samples and receive instant emotional analysis 
    with detailed insights. This project serves as the frontend demonstration of my ongoing voice emotion research, making 
    the technology accessible and user-friendly for testing and validation.`,
    image: "/project-voice-webapp.jpg",
    tech: ["React", "JavaScript", "Web Audio API", "Python Backend", "Machine Learning APIs"],
    github: "https://github.com/sarthaksingh02-sudo/voice-emotion-webapp",
    live: "https://voice-emotion-app.vercel.app",
    completedDate: "July 2025",
    category: "Web Development",
    featured: true
  },
  {
    id: 4,
    title: "Large-Scale Twitter Sentiment Analysis System",
    description: `Engineered and deployed a comprehensive sentiment analysis system during my IBM internship that processed 
    over 1.6 million tweets to extract public sentiment trends. The project involved sophisticated data preprocessing, 
    feature extraction, and machine learning model training to classify sentiments with high accuracy. This work provided 
    valuable insights into public opinion dynamics and demonstrated the power of NLP in understanding social media sentiment 
    at scale.`,
    image: "/project-twitter-sentiment.jpg",
    tech: ["Python", "NLTK", "Pandas", "Scikit-learn", "Twitter API", "Data Visualization", "Statistical Analysis"],
    github: "https://github.com/sarthaksingh02-sudo/twitter-sentiment-analysis",
    completedDate: "June - October 2024",
    category: "Data Science",
    company: "IBM Summer Internship",
    featured: true,
    impact: "Analyzed 1.6M+ tweets, provided actionable insights for public sentiment trends"
  },
  {
    id: 5,
    title: "AI-Powered Mental Health Therapy Bot",
    description: `Created an intelligent chatbot designed to provide mental health support and therapeutic conversations 
    using advanced API integrations. The bot incorporates natural language understanding to offer empathetic responses, 
    coping strategies, and mental wellness resources. This project was one of my early explorations into combining AI 
    technology with mental healthcare, laying the groundwork for my continued focus on this important field.`,
    image: "/project-therapy-bot.jpg",
    tech: ["Python", "Natural Language Processing", "API Integration", "Chatbot Development", "Mental Health APIs"],
    github: "https://github.com/sarthaksingh02-sudo/mental-health-bot",
    completedDate: "First Year (2024)",
    category: "Healthcare AI",
    impact: "Provided 24/7 mental health support and coping strategies"
  },
  {
    id: 6,
    title: "SPOTIPY: Intelligent Music Downloader",
    description: `Developed a sophisticated Spotify clone application that integrates with the Spotify API to automatically 
    download songs from users' liked playlists. The application features smart playlist management, batch downloading 
    capabilities, and seamless integration with personal music libraries. This project showcased my ability to work with 
    complex APIs and create user-friendly applications that enhance the music listening experience.`,
    image: "/project-spotipy.jpg",
    tech: ["Python", "Spotify API", "Audio Processing", "File Management", "GUI Development"],
    github: "https://github.com/sarthaksingh02-sudo/spotipy-downloader",
    completedDate: "First Year (2024)",
    category: "Software Development",
    impact: "Automated music library management for enhanced user experience"
  },
  {
    id: 7,
    title: "AR University Campus Model - Team AR-VERSE",
    description: `Led the development of a detailed 3D virtual model of our university campus using Unity 3D, which earned 
    first place in the university competition. Working under the expert guidance of Professor Gadu Srinivasrao, an AR/VR 
    specialist, our team spent four intensive weeks learning and implementing advanced 3D modeling techniques. Despite 
    registration constraints limiting the team to three members, I contributed significantly to the project's success while 
    supporting teammates Himanshu Majumdar, Hritesh, and Samit Singh Bag. This victory marked our first major collaborative 
    achievement and inspired us to pursue more ambitious projects in immersive technology.`,
    image: "/project-ar-campus.jpg",
    tech: ["Unity 3D", "AR/VR Development", "3D Modeling", "C#", "Immersive Technology", "Team Collaboration"],
    github: "https://github.com/sarthaksingh02-sudo/ar-campus-model",
    completedDate: "2024",
    category: "AR/VR Development",
    achievement: "🏆 First Place Winner",
    teamMembers: ["Himanshu Majumdar", "Hritesh", "Samit Singh Bag"],
    mentor: "Prof. Gadu Srinivasrao",
    impact: "Won 1st place in university competition, demonstrated teamwork and innovation in AR/VR"
  }
];

export const experience = [
  {
    title: "Summer Research Intern - NLP & Sentiment Analysis",
    company: "IBM",
    duration: "June 2024 - October 2024",
    location: "Gurugram, Haryana, India",
    description: `Spearheaded the development of a large-scale sentiment analysis system, successfully processing and 
    analyzing over 1.6 million tweets to extract meaningful sentiment patterns and public opinion trends. Utilized advanced 
    NLP techniques including data preprocessing, feature extraction, and machine learning model optimization to achieve 
    high-accuracy sentiment classification across positive, negative, and neutral categories.`,
    skills: ["Python", "NLTK", "Pandas", "Scikit-learn", "NLP", "Big Data Processing", "Statistical Analysis"],
    achievements: [
      "Processed 1.6M+ social media posts with 92% accuracy",
      "Developed automated preprocessing pipeline reducing analysis time by 60%",
      "Created comprehensive sentiment visualization dashboard for stakeholder insights"
    ],
    type: "internship"
  },
  {
    title: "Assistant Head Web and Tech",
    company: "Avishkar Innovation Centre, GD Goenka University",
    duration: "March 2025 - Present",
    location: "Gurugram, Haryana, India",
    description: `Leading technological initiatives and web development projects at the university's premier innovation hub. 
    Responsible for mentoring fellow students, managing cross-functional tech projects, and driving innovation in AI/ML 
    applications. Collaborating with faculty and industry partners to bring cutting-edge research projects to life.`,
    skills: ["Web Development", "Team Leadership", "Project Management", "AI/ML Innovation", "Mentorship"],
    achievements: [
      "Led 5+ student innovation projects in AI/ML domain",
      "Established web development best practices for student projects",
      "Coordinated collaboration between 20+ student researchers"
    ],
    type: "leadership"
  }
];

export const achievements = [
  {
    title: "Unity 3D Competition Winner", 
    description: "First place in university-wide AR/VR development competition with team AR-VERSE",
    year: "2024",
    category: "Competition"
  },
  {
    title: "IBM Summer Internship Impact",
    description: "Successfully analyzed 1.6M+ tweets, delivering actionable insights for sentiment trend analysis",
    year: "2024",
    category: "Professional"
  },
  {
    title: "Mental Health Technology Pioneer",
    description: "Pioneering research in voice-based emotion recognition for mental health applications",
    year: "2025",
    category: "Research"
  },
  {
    title: "Innovation Leadership",
    description: "Appointed as Assistant Head of Web and Tech at university innovation center",
    year: "2025",
    category: "Leadership"
  },
  {
    title: "RBI90 Quiz Regional Qualifier",
    description: "Selected at regional level for the prestigious RBI90 Quiz competition commemorating Reserve Bank of India's 90th anniversary, demonstrating excellence in banking, finance, and economic knowledge",
    year: "2024", // Update with correct year
    category: "Academic Excellence",
    partner: "Manish Tiwari",
    level: "Regional Level",
    organizer: "Reserve Bank of India",
    skills: ["Financial Literacy", "Banking Knowledge", "Economic Awareness", "Team Collaboration"]
  }
];

;

export const certifications = [
  {
    title: "Quantum Quest",
    issuer: "Department of Physics, Akal University", 
    year: "2024",
    type: "Quantum Computing"
  },
  {
    title: "How AI Thinks",
    issuer: "AI Education Platform",
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
