import React from "react";

export const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "AI & Machine Learning",
      icon: "🤖",
      description:
        "LLM systems, retrieval, voice agents and evaluation, from production work and research",
      skills: [
        { name: "Python", level: 95, category: "Language" },
        { name: "PyTorch", level: 90, category: "Framework" },
        { name: "Large Language Models (LLM)", level: 88, category: "AI Technique" },
        { name: "Retrieval-Augmented Generation (RAG)", level: 88, category: "AI Technique" },
        { name: "Azure AI Search (hybrid retrieval)", level: 85, category: "Retrieval" },
        { name: "Tool calling (OpenAI, Gemini APIs)", level: 85, category: "AI Technique" },
        { name: "OpenAI Whisper, Azure Voice Live", level: 80, category: "Voice" },
        { name: "LoRA fine-tuning", level: 75, category: "AI Technique" },
        { name: "llama.cpp", level: 75, category: "Inference" },
        { name: "Prompt-injection defense", level: 80, category: "AI Safety" },
        { name: "LLM evaluation (paired bootstrap, McNemar, Cohen's kappa)", level: 85, category: "Evaluation" },
        { name: "Reinforcement Learning", level: 85, category: "AI Technique" },
        { name: "Natural Language Processing (NLP)", level: 85, category: "AI Technique" },
        { name: "Multi-agent Systems", level: 85, category: "Research Area" },
        { name: "Pandas", level: 90, category: "Data Analysis" },
        { name: "NumPy", level: 90, category: "Scientific Computing" },
        { name: "Matplotlib", level: 85, category: "Visualization" },
      ],
    },
    {
      id: 2,
      title: "Frontend Development",
      icon: "💻",
      description:
        "Responsive interfaces and admin portals built with React and TypeScript",
      skills: [
        { name: "React.js", level: 90, category: "Framework" },
        { name: "TypeScript", level: 85, category: "Language" },
        { name: "JavaScript (ES6+)", level: 85, category: "Language" },
        { name: "HTML5 & CSS3", level: 90, category: "Markup & Styling" },
        { name: "Tailwind CSS", level: 80, category: "CSS Framework" },
        { name: "Bootstrap", level: 75, category: "CSS Framework" },
      ],
    },
    {
      id: 3,
      title: "Backend Development",
      icon: "⚙️",
      description: "Server-side applications, REST APIs and message-driven services",
      skills: [
        { name: "Python (FastAPI)", level: 88, category: "Framework" },
        { name: "pytest", level: 85, category: "Testing" },
        { name: "Node.js", level: 85, category: "Runtime" },
        { name: "Express.js", level: 85, category: "Framework" },
        { name: "MongoDB", level: 80, category: "Database" },
        { name: "Firebase", level: 75, category: "BaaS" },
        { name: "RESTful APIs", level: 85, category: "Architecture" },
        { name: "WebSockets / async", level: 80, category: "Architecture" },
      ],
    },
    {
      id: 4,
      title: "Mobile Development",
      icon: "📱",
      description: "Cross-platform mobile application development with Flutter",
      skills: [
        { name: "Flutter", level: 85, category: "Framework" },
        { name: "Dart", level: 80, category: "Language" },
        { name: "Android Studio", level: 75, category: "IDE" },
        { name: "Mobile UI/UX", level: 80, category: "Design" },
        { name: "Bloc state management", level: 75, category: "Architecture" },
      ],
    },
    {
      id: 5,
      title: "Programming Languages",
      icon: "🔤",
      description: "Languages I use across work, research and course projects",
      skills: [
        { name: "Python", level: 95, category: "AI/Backend" },
        { name: "TypeScript", level: 85, category: "Web" },
        { name: "JavaScript", level: 90, category: "Web" },
        { name: "Java", level: 80, category: "Object-Oriented" },
        { name: "Dart", level: 80, category: "Mobile" },
        { name: "SQL", level: 75, category: "Database" },
        { name: "Go", level: 65, category: "Systems" },
        { name: "C", level: 70, category: "Systems" },
        { name: "HTML/CSS", level: 90, category: "Web" },
      ],
    },
    {
      id: 6,
      title: "Cloud & Tools",
      icon: "🛠️",
      description:
        "Azure services, infrastructure as code, CI/CD and integration tools",
      skills: [
        { name: "Azure Container Apps", level: 85, category: "Cloud Platform" },
        { name: "Azure Functions", level: 85, category: "Cloud Platform" },
        { name: "Azure Service Bus", level: 80, category: "Messaging" },
        { name: "Azure Logic Apps", level: 78, category: "Integration" },
        { name: "Bicep", level: 80, category: "Infrastructure as Code" },
        { name: "Azure DevOps (approval-gated CI/CD)", level: 80, category: "CI/CD" },
        { name: "App Insights / KQL", level: 80, category: "Observability" },
        { name: "Key Vault, Entra ID, managed identity", level: 80, category: "Security" },
        { name: "Git & GitHub", level: 90, category: "Version Control" },
        { name: "Docker", level: 80, category: "Containerization" },
        { name: "VS Code", level: 95, category: "IDE" },
        { name: "WSL", level: 85, category: "Development Environment" },
        { name: "Postman", level: 80, category: "API Testing" },
        { name: "Power Automate", level: 78, category: "Workflow Automation" },
        { name: "Salesforce (Apex, Process Builder)", level: 75, category: "Enterprise Systems" },
      ],
    },
    {
      id: 7,
      title: "Data & Integration",
      icon: "📊",
      description: "CRM data pipelines, databases and enterprise integrations",
      skills: [
        { name: "Ellucian CRM (Ethos, Data Connect)", level: 80, category: "Enterprise Systems" },
        { name: "Databricks", level: 80, category: "Data Pipelines" },
        { name: "Dataverse Web API", level: 75, category: "Enterprise Systems" },
        { name: "Oracle SQL", level: 75, category: "Database" },
        { name: "SharePoint / Microsoft Graph", level: 80, category: "Integration" },
        { name: "DocuSign Connect", level: 75, category: "Integration" },
        { name: "Qualtrics", level: 70, category: "Integration" },
        { name: "FAISS", level: 75, category: "Vector Search" },
        { name: "MongoDB", level: 80, category: "NoSQL" },
        { name: "Firebase", level: 75, category: "Cloud Database" },
      ],
    },
  ];

  const getSkillColor = (level) => {
    if (level >= 85) return "bg-green-500 dark:bg-green-400";
    if (level >= 75) return "bg-blue-600 dark:bg-blue-400";
    if (level >= 65) return "bg-yellow-500 dark:bg-yellow-400";
    return "bg-orange-500 dark:bg-orange-400";
  };

  const SkillCard = ({ category }) => (
    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 group">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3">{category.icon}</span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {category.title}
        </h3>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        {category.description}
      </p>

      <div className="space-y-4">
        {category.skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-900 dark:text-white font-medium">
                {skill.name}
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-600 dark:text-gray-300 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                  {skill.category}
                </span>
                <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                  {skill.level}%
                </span>
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-500 ease-out ${getSkillColor(
                  skill.level
                )}`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Technical{" "}
          <span className="text-blue-600 dark:text-blue-400">Expertise</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          The languages, frameworks, cloud services and tools I use in my
          work at CSULB, my research and my projects.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
        {skillCategories.map((category) => (
          <SkillCard key={category.id} category={category} />
        ))}
      </div>

      {/* Summary Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-700">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              3
            </div>
            <div className="text-gray-900 dark:text-white font-semibold mb-1">
              Azure Systems
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Built and run at CSULB
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              15+
            </div>
            <div className="text-gray-900 dark:text-white font-semibold mb-1">
              Technologies
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Languages & frameworks
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              10+
            </div>
            <div className="text-gray-900 dark:text-white font-semibold mb-1">
              Projects
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Real-world applications
            </div>
          </div>
        </div>
      </div>

      {/* Learning Philosophy */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Continuous{" "}
          <span className="text-blue-600 dark:text-blue-400">Learning</span>
        </h3>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I keep learning new frameworks and tools as my work needs them. My
          goal is to write clear, tested code that solves real problems for the
          people who use it.
        </p>
      </div>
    </div>
  );
};
