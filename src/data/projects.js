export const projects = [
  {
  id: "petpals",
  name: "PetPals Adoption Website",
  tagline: "A MERN platform connecting pets with loving homes",
  image: "\PetPals_ Find Your Companion.png",
  gallery: [
    "\PetPals_ Find Your Companion.png",
  ],
  stack: ["React", "Node.js", "Express.js", "MongoDB", "CSS"],
  description:
    "A full-stack pet adoption website that allows users to explore available pets and submit adoption requests through an interactive platform.",
  problem:
    "Finding pets available for adoption can be difficult when information is scattered across different platforms. PetPals provides a centralized platform to make pet discovery and adoption requests easier.",
  features: [
    "Browse available pets for adoption",
    "Interactive pet listings and details",
    "Adoption request submission form",
    "Backend integration with MongoDB for storing adoption requests",
    "Responsive user interface for easy navigation",
  ],
  challenges:
    "Integrating the frontend with the backend and MongoDB to manage pet listings and adoption requests efficiently.",
  learnings:
    "Improved my understanding of MERN stack development, REST API integration, MongoDB database operations, CRUD functionality, and responsive frontend development.",
  architecture: "React frontend → Node.js & Express REST API → MongoDB database.",
  linkedin: "https://lnkd.in/p/gf9ucV9t",
},
  {
    id: "student-result",
    name: "Student Result Management System",
    tagline: "Managing student marks and academic results",
    image: "\Student Result Management Hero Dashboard.png",
    gallery: [
      "\Student Result Management Hero Dashboard.png",
    ],
    stack: ["React", "JavaScript", "HTML", "CSS"],
    description: "A web-based Student Result Management System designed to manage student academic records, organize results, and simplify student information handling through an interactive interface.",
    problem: "Managing student academic records manually can be time-consuming and make it difficult to organize, update, and access student results efficiently.",
    features: [
      "Student record management",
      "Add, update, and delete student details",
      "Organized student academic information",
      "Interactive and responsive user interface",
      "Efficient student data handling"
    ],
    challenges: "Designing a structured interface for managing student records and implementing efficient data handling with a responsive user experience.",
    learnings: "React component development, state management, CRUD operations, JavaScript, and responsive UI design.",
    architecture: "React frontend built using reusable components and JavaScript for student record management.",
    github: "https://github.com/shrilaxmi2006/Student_Result_System",
    demo: "",
},
  {
  id: "air-quality",
  name: "Air Quality Analysis & Prediction System",
  tagline: "Analyzing pollution trends and forecasting air quality",
  image: "\Air Quality Analytics Dashboard.png",
  gallery: [
    "\Air Quality Analytics Dashboard.png"
  ],
  stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Twilio API"],
  description: "A Python-based system that analyzes historical air pollution data across major Indian cities, visualizes pollution trends, and forecasts future pollution levels using Polynomial Regression.",
  problem: "The need to analyze historical air pollution patterns and estimate future pollution levels to support environmental awareness and monitoring.",
  features: [
    "City-wise pollution trend analysis",
    "Yearly, monthly, hourly, weekly, and regional visualizations",
    "Pollution forecasting using Polynomial Regression",
    "Analysis of CO, SO2, NOx, and O3 levels",
    "Automated SMS alerts using Twilio API"
  ],
  challenges: "Preprocessing timestamped pollution data, analyzing trends across multiple cities and pollutants, and generating reliable regression-based predictions.",
  learnings: "Data preprocessing, exploratory data analysis, data visualization, machine learning regression, and API-based SMS integration.",
  architecture: "Python-based data analysis pipeline using Pandas and NumPy for preprocessing, Scikit-learn for prediction, Matplotlib and Seaborn for visualization, and Twilio for SMS alerts.",
  github: "https://github.com/shrilaxmi2006/air_quality_prediction_system",
},
  {
    id: "face-recognition",
    name: "Face Recognition Attendance System",
    tagline: "AI-powered attendance tracking with facial recognition",
    image: "\Futuristic Face Recognition Dashboard.png",
    gallery: ["\Futuristic Face Recognition Dashboard.png"],
    stack: ["Python", "Flask", "OpenCV", "React", "JavaScript", "MongoDB"],
    description: "An AI-powered attendance management system that uses facial recognition to automate student attendance tracking with dedicated Admin, Faculty, and Student portals.",
    problem: "Traditional attendance management is time-consuming and prone to manual errors. This system automates attendance tracking using facial recognition technology.",
    features: [
        "Face registration and recognition using OpenCV",
        "Admin portal for student and attendance management",
        "Faculty portal for managing attendance sessions",
        "Student portal with face-based attendance marking",
        "Real-time face verification through webcam",
        "Attendance records, reports, and session management"
    ],
    challenges: "Integrating facial recognition with a web application, handling webcam-based face detection, connecting frontend and backend APIs, and implementing role-based access.",
    learnings: "Computer vision, OpenCV, Flask API development, facial recognition, React integration, authentication, database management, and real-time webcam processing.",
    architecture: "React frontend → Flask REST API → Face recognition using OpenCV → Database for student profiles and attendance records.",
    github: "",
    demo: "",
},
];
