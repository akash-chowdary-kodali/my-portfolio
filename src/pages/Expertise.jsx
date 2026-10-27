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
        { name: "Python", category: "Language" },
        { name: "PyTorch", category: "Framework" },
        { name: "Large Language Models (LLM)", category: "AI Technique" },
        { name: "Retrieval-Augmented Generation (RAG)", category: "AI Technique" },
        { name: "Azure AI Search (hybrid retrieval)", category: "Retrieval" },
        { name: "Tool calling (OpenAI, Gemini APIs)", category: "AI Technique" },
        { name: "OpenAI Whisper, Azure Voice Live", category: "Voice" },
        { name: "LoRA fine-tuning", category: "AI Technique" },
        { name: "llama.cpp", category: "Inference" },
        { name: "Prompt-injection defense", category: "AI Safety" },
        { name: "LLM evaluation (paired bootstrap, McNemar, Cohen's kappa)", category: "Evaluation" },
        { name: "Natural Language Processing (NLP)", category: "AI Technique" },
        { name: "Multi-agent Systems", category: "Research Area" },
        { name: "Pandas", category: "Data Analysis" },
        { name: "NumPy", category: "Scientific Computing" },
        { name: "Matplotlib", category: "Visualization" },
      ],
    },
    {
      id: 2,
      title: "Frontend Development",
      icon: "💻",
      description:
        "Responsive interfaces and admin portals built with React and TypeScript",
      skills: [
        { name: "React.js", category: "Framework" },
        { name: "TypeScript", category: "Language" },
        { name: "JavaScript (ES6+)", category: "Language" },
        { name: "HTML5 & CSS3", category: "Markup & Styling" },
        { name: "Tailwind CSS", category: "CSS Framework" },
        { name: "Bootstrap", category: "CSS Framework" },
      ],
    },
    {
      id: 3,
      title: "Backend Development",
      icon: "⚙️",
      description: "Server-side applications, REST APIs and message-driven services",
      skills: [
        { name: "Python (FastAPI)", category: "Framework" },
        { name: "pytest", category: "Testing" },
        { name: "Node.js", category: "Runtime" },
        { name: "Express.js", category: "Framework" },
        { name: "MongoDB", category: "Database" },
        { name: "Firebase", category: "BaaS" },
        { name: "RESTful APIs", category: "Architecture" },
        { name: "WebSockets / async", category: "Architecture" },
      ],
    },
    {
      id: 4,
      title: "Mobile Development",
      icon: "📱",
      description: "Cross-platform mobile application development with Flutter",
      skills: [
        { name: "Flutter", category: "Framework" },
        { name: "Dart", category: "Language" },
        { name: "Android Studio", category: "IDE" },
        { name: "Mobile UI/UX", category: "Design" },
        { name: "Bloc state management", category: "Architecture" },
      ],
    },
    {
      id: 5,
      title: "Programming Languages",
      icon: "🔤",
      description: "Languages I use across work, research and course projects",
      skills: [
        { name: "Python", category: "AI/Backend" },
        { name: "TypeScript", category: "Web" },
        { name: "JavaScript", category: "Web" },
        { name: "Java", category: "Object-Oriented" },
        { name: "Dart", category: "Mobile" },
        { name: "SQL", category: "Database" },
        { name: "C", category: "Systems" },
        { name: "HTML/CSS", category: "Web" },
      ],
    },
    {
      id: 6,
      title: "Cloud & Tools",
      icon: "🛠️",
      description:
        "Azure services, infrastructure as code, CI/CD and integration tools",
      skills: [
        { name: "Azure Container Apps", category: "Cloud Platform" },
        { name: "Azure Functions", category: "Cloud Platform" },
        { name: "Azure Service Bus", category: "Messaging" },
        { name: "Azure Logic Apps", category: "Integration" },
        { name: "Bicep", category: "Infrastructure as Code" },
        { name: "Azure DevOps (approval-gated CI/CD)", category: "CI/CD" },
        { name: "App Insights / KQL", category: "Observability" },
        { name: "Key Vault, Entra ID, managed identity", category: "Security" },
        { name: "Git & GitHub", category: "Version Control" },
        { name: "Docker", category: "Containerization" },
        { name: "VS Code", category: "IDE" },
        { name: "WSL", category: "Development Environment" },
        { name: "Postman", category: "API Testing" },
        { name: "Power Automate", category: "Workflow Automation" },
        { name: "Salesforce (Apex, Process Builder)", category: "Enterprise Systems" },
      ],
    },
    {
      id: 7,
      title: "Data & Integration",
      icon: "📊",
      description: "CRM data pipelines, databases and enterprise integrations",
      skills: [
        { name: "Ellucian CRM (Ethos, Data Connect)", category: "Enterprise Systems" },
        { name: "Databricks", category: "Data Pipelines" },
        { name: "Dataverse Web API", category: "Enterprise Systems" },
        { name: "Oracle SQL", category: "Database" },
        { name: "SharePoint / Microsoft Graph", category: "Integration" },
        { name: "DocuSign Connect", category: "Integration" },
        { name: "Qualtrics", category: "Integration" },
        { name: "FAISS", category: "Vector Search" },
        { name: "MongoDB", category: "NoSQL" },
        { name: "Firebase", category: "Cloud Database" },
      ],
    },
  ];

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

      <div className="space-y-3">
        {category.skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between items-center">
              <span className="text-gray-900 dark:text-white font-medium">
                {skill.name}
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-600 dark:text-gray-300 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                  {skill.category}
                </span>
              </div>
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
