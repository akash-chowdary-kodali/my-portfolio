import React from "react";

export const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "AI & Machine Learning",
      icon: "🤖",
      description:
        "Research and development in artificial intelligence, multi-agent systems, and large language models",
      skills: [
        { name: "Python", level: 95, category: "Language" },
        { name: "PyTorch", level: 90, category: "Framework" },
        { name: "Reinforcement Learning", level: 85, category: "AI Technique" },
        { name: "LLM Fine-tuning", level: 80, category: "AI Technique" },
        { name: "Multi-agent Systems", level: 85, category: "Research Area" },
      ],
    },
    {
      id: 2,
      title: "Frontend Development",
      icon: "💻",
      description:
        "Creating responsive and interactive user interfaces with modern frameworks and libraries",
      skills: [
        { name: "React.js", level: 90, category: "Framework" },
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
      description: "Building robust server-side applications and RESTful APIs",
      skills: [
        { name: "Node.js", level: 85, category: "Runtime" },
        { name: "Express.js", level: 85, category: "Framework" },
        { name: "MongoDB", level: 80, category: "Database" },
        { name: "Firebase", level: 75, category: "BaaS" },
        { name: "RESTful APIs", level: 85, category: "Architecture" },
      ],
    },
    {
      id: 3,
      title: "Mobile Development",
      icon: "📱",
      description: "Cross-platform mobile application development with Flutter",
      skills: [
        { name: "Flutter", level: 85, category: "Framework" },
        { name: "Dart", level: 80, category: "Language" },
        { name: "Android Studio", level: 75, category: "IDE" },
        { name: "Mobile UI/UX", level: 80, category: "Design" },
        { name: "State Management", level: 75, category: "Architecture" },
      ],
    },
    {
      id: 5,
      title: "Programming Languages",
      icon: "🔤",
      description: "Proficient in multiple programming languages and paradigms",
      skills: [
        { name: "Python", level: 95, category: "AI/Research" },
        { name: "JavaScript", level: 90, category: "Web" },
        { name: "Java", level: 80, category: "Object-Oriented" },
        { name: "Dart", level: 80, category: "Mobile" },
        { name: "SQL", level: 75, category: "Database" },
        { name: "R", level: 70, category: "Statistics" },
        { name: "Go", level: 65, category: "Systems" },
      ],
    },
    {
      id: 6,
      title: "Tools & Technologies",
      icon: "🛠️",
      description:
        "Development tools, version control, and deployment platforms",
      skills: [
        { name: "Git & GitHub", level: 90, category: "Version Control" },
        { name: "Docker", level: 80, category: "Containerization" },
        { name: "VS Code", level: 95, category: "IDE" },
        { name: "WSL", level: 85, category: "Development Environment" },
        { name: "Postman", level: 80, category: "API Testing" },
      ],
    },
    {
      id: 7,
      title: "Database & Analytics",
      icon: "📊",
      description: "Database management, data analysis, and big data tools",
      skills: [
        { name: "MongoDB", level: 80, category: "NoSQL" },
        { name: "Firebase", level: 75, category: "Cloud Database" },
        { name: "Hadoop Tools", level: 70, category: "Big Data" },
        { name: "pandas", level: 85, category: "Data Analysis" },
        { name: "NumPy", level: 85, category: "Scientific Computing" },
        { name: "Matplotlib", level: 80, category: "Visualization" },
        { name: "PySpark", level: 70, category: "Big Data Processing" },
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
          A comprehensive overview of my technical skills, tools, and
          technologies that I use to build innovative solutions.
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
              3+
            </div>
            <div className="text-gray-900 dark:text-white font-semibold mb-1">
              Years Learning
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Continuous development
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
          Technology evolves rapidly, and I stay current by continuously
          learning new frameworks, best practices, and industry standards. My
          goal is to write clean, efficient code that solves real-world problems
          while maintaining scalability and user experience.
        </p>
      </div>
    </div>
  );
};
