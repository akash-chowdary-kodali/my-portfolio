import React from "react";
import FAARentalApp from "../assets/imgs/FAARental_App.webp";
import G_Bloodbank from "../assets/imgs/gitamBloodbank.webp";
import Weatherimg from "../assets/imgs/WeatherApp.webp";
import WhatsappImg from "../assets/imgs/WhatsappClone.webp";

export const Projects = () => {
  const aiImage =
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  const projects = [
    {
      id: 0,
      title: "AI Voice Agent - CSULB Student Financial Services",
      description:
        "I led the design of this voice agent and extended a Microsoft sample into production (117 commits). It is deployed to production and in staged business testing before it opens to students. A FastAPI service streams Azure Communication Services call audio through OpenAI Whisper and Azure Voice Live (gpt-realtime) for bilingual English and Spanish calls, and the model calls 4 tools: RAG search, SMS, transfer and end call. Answers come from an Azure AI Search RAG layer (hybrid BM25, vector and semantic ranking). Infrastructure is defined in Bicep and ships through an approval-gated CI/CD pipeline.",
      image: aiImage,
      technologies: ["Python", "FastAPI", "Azure", "React"],
      category: "CSULB Work",
      githubUrl: null,
      liveUrl: null,
      featured: true,
      highlights: [
        "Deployed to production, in staged business testing",
        "Raised per-result RAG context from 800 to 2,000 characters after truncation dropped key facts",
        "Traced 34 failed call transfers to a missing caller ID and shipped a fix",
        "Bicep IaC, App Insights, CI/CD running 59 pytest tests",
      ],
    },
    {
      id: 1,
      title: "Atlas: LLMs for Bibliographic Retrieval",
      description:
        "My first-author paper in the ACL Anthology (WASP workshop, IJCNLP-AACL 2025): Atlas: Customizing Large Language Models for Reliable Bibliographic Retrieval and Verification. It looks at how often LLMs get citations right. My M.S. thesis builds on it, measuring how prompting, web search and verification change the DOI accuracy of GPT and Gemini against Crossref's production matcher on its 2,000-reference benchmark.",
      image: aiImage,
      technologies: ["Python", "OpenAI API", "Gemini API"],
      category: "Publication",
      githubUrl: "https://akashkodali.dev/atlas-p",
      linkLabel: "Paper",
      liveUrl: null,
      featured: true,
      highlights: [
        "First-author paper, ACL Anthology (WASP, IJCNLP-AACL 2025)",
        "Thesis: Gemini with web search matched Crossref's matcher (2.6 F1 gap, not significant)",
        "Paired bootstrap, McNemar tests, blind dual human annotation",
        "2,000-reference Crossref benchmark",
      ],
    },
    {
      id: 2,
      title: "Risk Analysis in Multi-Agent Teams",
      description:
        "I built the experiment platform for a multi-agent study of coordination loss when a teammate is swapped mid-task. It runs agents in Overcooked-AI (450 episodes), scores coordination risk with Value-at-Risk, and includes an LLM agent layer for OpenAI, Gemini and Ollama. The paper is in progress.",
      image: aiImage,
      technologies: ["Python", "Overcooked-AI", "OpenAI", "Gemini", "Ollama"],
      category: "AI Research",
      githubUrl: "https://akashkodali.dev/risk",
      liveUrl: null,
      featured: true,
      highlights: [
        "Teammate swapped mid-task in Overcooked-AI",
        "450 episodes",
        "Value-at-Risk scoring of coordination risk",
        "LLM agent layer for OpenAI, Gemini and Ollama",
      ],
    },
    {
      id: 9,
      title: "Cross-Platform LLM Inference Benchmark",
      description:
        "Profiled LLaMA 3.2 1B and 3B decoding in llama.cpp on Apple M4, M4 Pro, NVIDIA A100 and x86 across F16, Q8 and Q4, using PyTorch hooks and a roofline model. Decode throughput tracks memory bandwidth (R^2 > 0.99), and 4-bit quantization gives a 2.37x speedup on M4 but only 1.07x on A100.",
      image: aiImage,
      technologies: ["Python", "llama.cpp", "PyTorch"],
      category: "Course Project",
      githubUrl: "https://akashkodali.dev/llm-bench",
      liveUrl: null,
      featured: true,
      highlights: [
        "LLaMA 3.2 1B/3B on M4, M4 Pro, A100 and x86",
        "F16, Q8 and Q4 quantization",
        "Decode throughput tracks memory bandwidth (R^2 > 0.99)",
        "4-bit: 2.37x on M4, 1.07x on A100",
      ],
    },
    {
      id: 10,
      title: "Ontology-Grounded Vision-LLM Risk Detection",
      description:
        "Grounded three vision LLMs (GPT-4o-mini, Gemini and Pixtral) in a custom driving-risk ontology across 972 calls. Valid structured (RDF) output rose from 60.1% to 96.9% and precision rose 45% (relative), at a 41% recall cost.",
      image: aiImage,
      technologies: ["Python", "OWL/RDF", "rdflib", "GPT-4o-mini", "Gemini", "Pixtral"],
      category: "Course Project",
      githubUrl: "https://akashkodali.dev/ontology",
      liveUrl: null,
      featured: true,
      highlights: [
        "Custom driving-risk ontology (OWL/RDF)",
        "972 model calls across 3 vision LLMs",
        "Valid RDF output: 60.1% to 96.9%",
        "Precision +45% (relative), recall -41%",
      ],
    },
    {
      id: 11,
      title: "Health Insurance Q&A Agent",
      description:
        "Built FAISS retrieval over 6,021 CMS Marketplace documents, fine-tuned Gemma-2-2B with LoRA on 18,020 synthetic Q&A pairs, and routed live-data questions to the healthcare.gov API, served through FastAPI and Streamlit.",
      image: aiImage,
      technologies: ["FAISS", "LoRA", "Gemma-2-2B", "FastAPI", "Streamlit"],
      category: "Course Project",
      githubUrl: "https://akashkodali.dev/health-agent",
      liveUrl: null,
      featured: true,
      highlights: [
        "FAISS retrieval over 6,021 CMS Marketplace documents",
        "LoRA fine-tune of Gemma-2-2B on 18,020 synthetic Q&A pairs",
        "Live-data questions routed to the healthcare.gov API",
        "Served through FastAPI and Streamlit",
      ],
    },
    {
      id: 3,
      title: "Furniture and Appliances Rental App",
      description:
        "Built a cross-platform rental marketplace end to end (Dec 2023 - Mar 2025): a Flutter app with Bloc state management and encrypted on-device token storage, an Express.js REST API, and MongoDB for inventory, rentals and users.",
      image: FAARentalApp,
      technologies: ["Flutter", "Express.js", "Node.js", "MongoDB"],
      category: "Full Stack",
      githubUrl: "https://akashkodali.dev/rental",
      liveUrl: null,
      featured: true,
      highlights: [
        "Cross-platform rental marketplace in Flutter",
        "Bloc state management for persistent user sessions",
        "Encrypted on-device token storage",
        "Express.js REST API with MongoDB",
      ],
    },
    {
      id: 5,
      title: "GIMSR Blood Bank",
      description:
        "Built a blood bank web app for GIMSR: React donor and blood-request forms, a Firebase real-time database, an admin dashboard to approve donations and requests, and automatic email notifications.",
      image: G_Bloodbank,
      technologies: ["React", "Firebase", "Bootstrap"],
      category: "Web Application",
      githubUrl: "https://akashkodali.dev/bloodbank",
      liveUrl: null,
      featured: true,
      highlights: [
        "React donor and blood-request forms",
        "Firebase real-time database for donation status",
        "Admin dashboard to approve donations and requests",
        "Automatic email notifications",
      ],
    },
    {
      id: 6,
      title: "Big Data Movie Recommendation System",
      description:
        "Co-built a distributed user-based collaborative-filtering system in Python to predict movie ratings. On the MovieLens 100K dataset, Pearson similarity (RMSE 1.059) beat cosine similarity (RMSE 1.069).",
      image: aiImage,
      technologies: ["Python"],
      category: "Big Data",
      githubUrl: "https://akashkodali.dev/movie",
      liveUrl: null,
      featured: true,
      highlights: [
        "Distributed user-based collaborative filtering",
        "Predicts movie ratings",
        "Pearson (RMSE 1.059) vs cosine (RMSE 1.069)",
        "Benchmarked on MovieLens 100K",
      ],
    },
    {
      id: 7,
      title: "WhatsApp UI Clone",
      description:
        "A learning project to explore Flutter: a UI clone of WhatsApp built to learn Flutter's UI elements, widget composition, and state management basics, including 'TabBar' for navigation, 'ListView.builder' for scrollable lists, and 'StatefulWidget' for UI interactions.",
      image: WhatsappImg,
      technologies: ["Flutter"],
      category: "Mobile App",
      githubUrl: "https://akashkodali.dev/whatsapp-clone",
      liveUrl: null,
      featured: false,
      highlights: [
        "UI clone of WhatsApp using Flutter",
        "TabBar, ListView.builder, StatefulWidget",
        "Flutter UI elements and widget composition",
        "State management basics",
      ],
    },
    {
      id: 8,
      title: "React Weather Application",
      description:
        "A learning project for React and data fetching: a single-page weather app that uses useState and fetch to call the OpenWeatherMap API and update the UI without reloads.",
      image: Weatherimg,
      technologies: ["React", "API"],
      category: "Web Application",
      githubUrl: "https://akashkodali.dev/weather",
      liveUrl: null,
      featured: false,
      highlights: [
        "Weather data from the OpenWeatherMap API",
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
