import React from "react";
import FAARentalApp from "../assets/imgs/FAARental_App.webp";
import G_Bloodbank from "../assets/imgs/gitamBloodbank.webp";
import Weatherimg from "../assets/imgs/WeatherApp.webp";
import WhatsappImg from "../assets/imgs/WhatsappClone.webp";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Atlas: LLM for Bibliographic Retrieval",
      description:
        "Developed a verification pipeline using Python and GPT-4, focusing on a instruction-guided prompt strategy to mitigate metadata hallucination in academic retrieval. Addressing the core challenge of LLM unreliability, The Atlas in the analysis has achieved 83.3% accuracy in data extraction which drastically outperformed standard GPT (46.2%) and a baseline API (0.0%). Contributed to the paper accepted at the AACL-IJCNLP 2025 Workshop (WASP).",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Python", "GPT-4"],
      category: "Publication",
      githubUrl: "https://akashkodali.dev/atlas-p",
      linkLabel: "Paper",
      liveUrl: null,
      featured: true,
      highlights: [
        "Verification pipeline using Python and GPT-4",
        "Instruction-guided prompt strategy to mitigate metadata hallucination",
        "83.3% accuracy vs 46.2% standard GPT and 0.0% baseline API",
        "Published at AACL-IJCNLP 2025 Workshop (WASP)",
      ],
    },
    {
      id: 2,
      title: "Risk Analysis in Multi-Agent Teams",
      description:
        "Built a risk analysis framework that evaluates the impact of teammate substitution by looking at Value-at-Risk (VaR) methodology to quantify coordination risk, defining 'high-risk' interactions as the 95th percentile of spatial divergence, reward efficiency, proving human-aware agents perform better. Authored a paper demonstrating that low-risk Human-Aware PPO agents achieved the best 'Time to First Reward,' while high-risk Human-Input agents had the worst.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Python", "PyTorch"],
      category: "AI Research",
      githubUrl: "https://akashkodali.dev/risk",
      liveUrl: null,
      featured: true,
      highlights: [
        "Value-at-Risk (VaR) methodology for coordination risk",
        "95th percentile spatial divergence as high-risk threshold",
        "Human-aware PPO agents achieved best 'Time to First Reward'",
        "Research paper on team dynamics analysis",
      ],
    },
    {
      id: 3,
      title: "Furniture and Appliances Rental App",
      description:
        "Planned and Engineered a full-stack cross-platform rental marketplace; the front-end was developed in Flutter, the server in Express.js (Node.js), and the database in MongoDB. Ensured the mobile application has a smooth, high-performance (FPS) MaterialUI by leveraging Flutter's compiled native code and efficient widget tree and inspector tool which lead to minimizing rendering lag. Solved a key challenge in state management by implementing Cubit for persistent user sessions for tokenized access and secure on-device storage with encryption.",
      image: FAARentalApp,
      technologies: ["Flutter", "Node.js", "MongoDB"],
      category: "Full Stack",
      githubUrl: "https://akashkodali.dev/rental",
      liveUrl: null,
      featured: true,
      highlights: [
        "Full-stack cross-platform rental marketplace",
        "High-performance FPS MaterialUI with Flutter",
        "Cubit state management for persistent user sessions",
        "Secure on-device storage with encryption",
      ],
    },
    {
      id: 4,
      title: "LLM Fine-Tuning: DistilBERT SA",
      description:
        "Explored the concept of LLM and fine-tuning to understand the fundamentals of LLMs and transfer learning. Fine-tuning a pre-trained DistilBERT model on the IMDB dataset using the Hugging Face 'transformers' library, achieving an 88.54% accuracy on sentiment analysis even when fine-tuned with a poisoned dataset. This foundational work of training a model for a particular domain in transfer learning provided the initial insights that led to the more advanced 'Atlas' GPT pipeline research.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Python", "Hugging Face"],
      category: "AI/ML",
      githubUrl: "https://akashkodali.dev/llm-finetune",
      liveUrl: null,
      featured: true,
      highlights: [
        "Fine-tuned DistilBERT model on IMDB dataset",
        "88.54% accuracy on sentiment analysis with poisoned dataset",
        "Hugging Face transformers library implementation",
        "Foundation work leading to 'Atlas' GPT pipeline research",
      ],
    },
    {
      id: 5,
      title: "GIMSR Blood Bank",
      description:
        "Developed and deployed a real-time responsive blood bank management web app on Github Pages. The front-end was built with React and the back-end with Node.js. Optimized for fast UI updates by leveraging React's Virtual DOM, ensuring donation status changes rendered instantly without full page reloads. Addressed the challenge of live inventory management by utilizing Firebase's real-time database to instantly update donation statuses asynchronously.",
      image: G_Bloodbank,
      technologies: ["React", "Node.js", "Firebase", "Bootstrap"],
      category: "Web Application",
      githubUrl: "https://akashkodali.dev/bloodbank",
      liveUrl: null,
      featured: true,
      highlights: [
        "Real-time responsive blood bank management web app",
        "React Virtual DOM for fast UI updates",
        "Firebase real-time database for async donation status",
        "Deployed on GitHub Pages",
      ],
    },
    {
      id: 6,
      title: "Big Data Movie Recommendation System",
      description:
        "Engineered a distributed User-Based Collaborative Filtering system using Python and the Hadoop MapReduce framework to predict movie ratings. Analysis Benchmarked for user similarity metrics, finding Pearson Correlation (RMSE: 1.059) more effective than Cosine Similarity (RMSE: 1.069) for the ml-100k dataset.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Python", "Hadoop", "MapReduce"],
      category: "Big Data",
      githubUrl: "https://akashkodali.dev/movie",
      liveUrl: null,
      featured: true,
      highlights: [
        "Distributed User-Based Collaborative Filtering system",
        "Hadoop MapReduce framework implementation",
        "Pearson Correlation (RMSE: 1.059) vs Cosine Similarity (RMSE: 1.069)",
        "Benchmarked on ml-100k dataset",
      ],
    },
    {
      id: 7,
      title: "WhatsApp UI Clone",
      description:
        "Explored the popular 'Flutter' Framework and developed a 1:1 UI clone of the app by learning Flutter's UI elements, widget composition, and state management fundamentals. Mastered core widgets and concepts, including 'TabBar' for navigation, 'ListView.builder' for scrollable lists, and 'StatefulWidget' for UI interactions.",
      image: WhatsappImg,
      technologies: ["Flutter"],
      category: "Mobile App",
      githubUrl: "https://akashkodali.dev/whatsapp-clone",
      liveUrl: null,
      featured: false,
      highlights: [
        "1:1 UI clone of WhatsApp using Flutter",
        "Mastered TabBar, ListView.builder, StatefulWidget",
        "Flutter UI elements and widget composition",
        "State management fundamentals",
      ],
    },
    {
      id: 8,
      title: "React Weather Application",
      description:
        "Developed a real-time weather application by learning the fundamentals of React.js & data fetching. Built a responsive, single-page application by implementing React's component-based architecture, solving the challenge of asynchronous data handling by using useState and fetch to integrate the OpenWeatherMap API and update the UI dynamically without reloads.",
      image: Weatherimg,
      technologies: ["React", "API"],
      category: "Web Application",
      githubUrl: "https://akashkodali.dev/weather",
      liveUrl: null,
      featured: false,
      highlights: [
        "Real-time weather data with OpenWeatherMap API",
        "React component-based architecture",
        "useState and fetch for async data handling",
        "Responsive single-page application",
      ],
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  const ProjectCard = ({ project, featured = false }) => (
    <div
      className={`bg-gray-50 dark:bg-gray-800/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 group ${
        ""
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

        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
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
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-center"
            >
              <span className="flex items-center justify-center">
                {project.linkLabel ? (
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                )}
                {project.linkLabel || "Code"}
              </span>
            </a>
          )}
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

        <div className="grid grid-cols-1 gap-8">
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

        <div className="grid grid-cols-1 gap-8">
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
