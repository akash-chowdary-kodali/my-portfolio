import React from "react";
import FAARentalApp from "../assets/imgs/FAARental_App.webp";
import G_Bloodbank from "../assets/imgs/gitamBloodbank.webp";
import TODOLIST from "../assets/imgs/ToDo_list.webp";
import Weatherimg from "../assets/imgs/WeatherApp.webp";
import WhatsappImg from "../assets/imgs/WhatsappClone.webp";
import QRAppImg from "../assets/imgs/qrApp.webp";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Risk Analysis in Multi-Agent Teams",
      description:
        "Ongoing research project developing a risk analysis framework to quantify the impact of teammate substitution on coordination in multi-agent systems. Uses spatial coordination and reward metrics to demonstrate how human-aware agents reduce performance degradation during partner transitions.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: [
        "Python",
        "PyTorch",
        "Overcooked-AI",
        "Reinforcement Learning",
        "Multi-agent Systems",
        "Research",
      ],
      category: "AI Research",
      githubUrl: null,
      liveUrl: null,
      featured: true,
      highlights: [
        "Risk analysis framework for multi-agent coordination",
        "Spatial coordination and reward efficiency metrics",
        "Human-aware vs self-play agent comparison",
        "Performance degradation analysis during transitions",
        "Research paper authorship",
        "PyTorch implementation with Overcooked-AI benchmark",
      ],
    },
    {
      id: 2,
      title: "Furniture & Appliances Rental Platform",
      description:
        "A comprehensive rental marketplace built with Flutter frontend and Express.js/MongoDB backend. Features user authentication, product listings, advanced search, booking system with calendar integration, payment processing, and real-time notifications. Implements clean architecture with proper state management and offline capabilities.",
      image: FAARentalApp,
      technologies: [
        "Flutter",
        "Express.js",
        "MongoDB",
        "REST API",
        "Firebase Auth",
        "Payment Gateway",
      ],
      category: "Full Stack",
      githubUrl: "https://github.com/akash-chowdary-kodali/rental_app",
      liveUrl: null,
      featured: true,
      highlights: [
        "User authentication & profile management",
        "Product catalog with search & filters",
        "Booking system with calendar integration",
        "Payment processing integration",
        "Real-time notifications",
        "Admin dashboard for inventory management",
      ],
    },
    {
      id: 3,
      title: "GIMSR Blood Bank Management System",
      description:
        "Built and deployed a real-time blood bank management web application using React and Firebase to streamline inventory tracking, manage donations, and improve donor coordination. Features comprehensive admin dashboard and real-time updates.",
      image: G_Bloodbank,
      technologies: ["React.js", "Firebase", "Bootstrap", "Node.js", "Render"],
      category: "Web Application",
      githubUrl: "https://github.com/bloodbankgitam/Bloodbank_react",
      liveUrl: null,
      featured: true,
      highlights: [
        "Real-time inventory tracking system",
        "Donor registration & profile management",
        "Blood request & donation coordination",
        "Emergency notification system",
        "Admin dashboard with analytics",
        "Deployed on Render with Firebase backend",
      ],
    },
    {
      id: 3,
      title: "Task Management Application",
      description:
        "Cross-platform productivity app with Flutter frontend and Express.js backend. Features include task creation with priority levels, deadline tracking, category organization, real-time synchronization across devices, offline capabilities, and progress analytics with visual reports.",
      image: TODOLIST,
      technologies: [
        "Flutter",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Provider",
        "Local Storage",
      ],
      category: "Mobile App",
      githubUrl: "https://github.com/akash-chowdary-kodali/todo_list",
      liveUrl: null,
      featured: true,
      highlights: [
        "Cross-platform mobile application",
        "Real-time task synchronization",
        "Priority & deadline management",
        "Offline data persistence",
        "Progress tracking & analytics",
        "Clean, intuitive user interface",
      ],
    },
    {
      id: 4,
      title: "Weather Forecast Application",
      description:
        "Real-time weather application built with React.js that provides current weather conditions and 7-day forecasts. Features location-based weather data, interactive weather maps, detailed weather metrics, and responsive design for optimal viewing on all devices.",
      image: Weatherimg,
      technologies: [
        "React.js",
        "Weather API",
        "Geolocation",
        "CSS3",
        "Responsive Design",
      ],
      category: "Web Application",
      githubUrl: "https://github.com/akash-chowdary-kodali/weather-app",
      liveUrl: null,
      featured: false,
      highlights: [
        "Real-time weather data integration",
        "Location-based weather detection",
        "7-day weather forecast",
        "Interactive weather maps",
        "Responsive design across devices",
      ],
    },
    {
      id: 5,
      title: "WhatsApp Clone",
      description:
        "Feature-rich messaging application inspired by WhatsApp, built with React.js and Firebase. Includes real-time messaging, user authentication, profile management, message status indicators, and group chat functionality with modern UI design.",
      image: WhatsappImg,
      technologies: [
        "React.js",
        "Firebase",
        "Real-time Database",
        "Authentication",
        "CSS3",
      ],
      category: "Web Application",
      githubUrl: "https://github.com/akash-chowdary-kodali/whatsapp-clone",
      liveUrl: null,
      featured: false,
      highlights: [
        "Real-time messaging system",
        "User authentication & profiles",
        "Message status indicators",
        "Group chat functionality",
        "Modern WhatsApp-inspired UI",
      ],
    },
    {
      id: 6,
      title: "QR Code Generator & Scanner",
      description:
        "Utility application built with Flutter for generating and scanning QR codes. Features include custom QR code generation, camera-based scanning, history tracking, batch operations, and sharing capabilities with clean, user-friendly interface.",
      image: QRAppImg,
      technologies: [
        "Flutter",
        "QR Code Libraries",
        "Camera Integration",
        "Local Storage",
      ],
      category: "Mobile App",
      githubUrl: "https://github.com/akash-chowdary-kodali/qr-app",
      liveUrl: null,
      featured: false,
      highlights: [
        "QR code generation with customization",
        "Camera-based QR code scanning",
        "Scan history & favorites",
        "Batch QR operations",
        "Share & export functionality",
      ],
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  const ProjectCard = ({ project, featured = false }) => (
    <div
      className={`bg-gray-50 dark:bg-gray-800/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 group ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-blue-600/90 text-white text-sm font-semibold rounded-full">
            {project.category}
          </span>
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold rounded-full">
              ⭐ Featured
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Key Highlights */}
        {featured && (
          <div className="mb-4">
            <h4 className="text-gray-900 dark:text-white font-semibold mb-2 text-sm">
              Key Features:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {project.highlights.slice(0, 4).map((highlight, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700/50 text-blue-600 dark:text-blue-400 text-xs rounded border border-gray-300 dark:border-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-center"
          >
            <span className="flex items-center justify-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Code
            </span>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-center"
            >
              <span className="flex items-center justify-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Featured{" "}
          <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A collection of projects that showcase my technical skills and
          problem-solving abilities. From full-stack web applications to
          cross-platform mobile apps, each project represents a unique challenge
          and learning experience.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="w-8 h-8 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
            ⭐
          </span>
          Featured Work
        </h3>

        <div className="grid lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured={true} />
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
          <span className="w-8 h-8 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
            💼
          </span>
          More Projects
        </h3>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Want to see more?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Check out my GitHub profile for more projects, contributions, and code
          samples. I'm always working on something new and exciting!
        </p>
        <a
          href="https://github.com/akash-chowdary-kodali"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-blue-600 dark:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          Visit GitHub Profile
        </a>
      </div>
    </div>
  );
};
