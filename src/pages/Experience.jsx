import React from "react";

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Graduate Research Assistant",
      company: "California State University, Long Beach",
      location: "Long Beach, CA",
      period: "Jan 2025 - Present",
      type: "Research",
      description:
        "Developing risk analysis frameworks to quantify the impact of teammate substitution on coordination in multi-agent systems using the Overcooked-AI benchmark. Leading research on team dynamics and agent collaboration patterns.",
      achievements: [
        "Developed a risk analysis framework using spatial coordination and reward efficiency metrics",
        "Analyzed team dynamics by measuring shifts after systematically substituting agents trained with different methods",
        "Demonstrated that human-aware agents maintained significantly better team performance during partner transitions",
        "Fine-tuned Large Language Models (LLMs) for domain-specific applications using RLHF techniques",
        "Applied reinforcement learning techniques to align LLMs with target behaviors",
      ],
      technologies: [
        "Python",
        "PyTorch",
        "Overcooked-AI",
        "Reinforcement Learning",
        "LLM Fine-tuning",
        "RLHF",
      ],
      link: null,
    },
    {
      id: 2,
      title: "Salesforce Developer Intern",
      company: "SmartInternz",
      location: "Remote",
      period: "April 2023 - May 2023",
      type: "Internship",
      description:
        "Developed and optimized Apex code to enhance Salesforce functionality and automate business processes. Learned workflow automation and delivered high-quality Salesforce solutions.",
      achievements: [
        "Developed and optimized Apex code to enhance Salesforce functionality",
        "Automated complex workflows using Salesforce Process Builder and Flow, improving operational efficiency by 30%",
        "Customized Salesforce solutions to meet specific business requirements, increasing productivity",
        "Conducted thorough testing and debugging to deliver high-quality solutions",
      ],
      technologies: [
        "Salesforce Lightning",
        "Apex",
        "SOQL",
        "Process Builder",
        "Flow",
        "Custom Objects",
      ],
      link: "https://smartinternz.com/internships/salesforce_certificates/45c7a284efa7d07f7bb5c9afb3080ffd",
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Master of Science (MS)",
      field: "Computer Science",
      institution: "California State University, Long Beach",
      location: "Long Beach, CA",
      period: "Aug 2024 - Dec 2026",
      type: "education",
      description:
        "Pursuing advanced studies in computer science with specialization in artificial intelligence, machine learning, and research methodologies. Currently working as Graduate Research Assistant.",
      courses: [
        "Advanced Machine Learning",
        "Multi-Agent Systems",
        "Natural Language Processing",
        "Reinforcement Learning",
        "Advanced Algorithms",
        "Research Methods in Computer Science",
      ],
    },
    {
      id: 2,
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      institution: "GITAM University",
      location: "Visakhapatnam, India",
      period: "Aug 2020 - May 2024",
      type: "education",
      description:
        "Completed comprehensive computer science education with strong foundation in software development, data structures, algorithms, and modern web technologies.",
      courses: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Web Technologies",
        "Software Engineering",
        "Mobile Application Development",
        "Computer Networks",
      ],
    },
  ];

  const ExperienceCard = ({ item, isEducation = false }) => (
    <div className="relative pl-8 pb-12">
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900"></div>

      {/* Timeline line */}
      <div className="absolute left-2 top-4 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>

      {/* Content */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-300">
        <div className="flex flex-wrap items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {isEducation ? item.degree : item.title}
            </h3>
            <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
              {isEducation ? item.institution : item.company}
              {item.location && (
                <span className="text-gray-600 dark:text-gray-300 font-normal ml-2">
                  • {item.location}
                </span>
              )}
            </div>
            {isEducation && item.field && (
              <div className="text-gray-600 dark:text-gray-300 mb-2">
                {item.field}
              </div>
            )}
          </div>
          <div className="flex flex-col items-end">
            <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full border border-blue-200 dark:border-blue-700 mb-2">
              {item.period}
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 text-xs rounded-full">
              {isEducation ? "Education" : item.type}
            </span>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {item.description}
        </p>

        {/* Achievements or Courses */}
        {(item.achievements || item.courses) && (
          <div className="mb-4">
            <h4 className="text-gray-900 dark:text-white font-semibold mb-3">
              {isEducation ? "Key Courses:" : "Key Achievements:"}
            </h4>
            <ul className="space-y-2">
              {(item.achievements || item.courses).map((achievement, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        {item.technologies && (
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700/50 text-blue-600 dark:text-blue-400 text-xs rounded border border-gray-300 dark:border-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* External Link */}
        {item.link && (
          <div className="mt-4">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm"
            >
              View Certificate
              <svg
                className="w-4 h-4 ml-1"
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
            </a>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Experience & Education
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey, academic background, and the skills I've
            developed along the way.
          </p>
        </div>

        <div className="relative">
          {/* Professional Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <span className="w-8 h-8 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
                💼
              </span>
              Professional Experience
            </h3>

            <div className="space-y-0">
              {experiences.map((exp) => (
                <ExperienceCard key={exp.id} item={exp} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <span className="w-8 h-8 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
                🎓
              </span>
              Education
            </h3>

            <div className="space-y-0">
              {education.map((edu) => (
                <ExperienceCard key={edu.id} item={edu} isEducation={true} />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl border border-blue-200 dark:border-blue-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Ready to collaborate?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm always open to discussing new opportunities and innovative
            projects.
          </p>
          <button className="bg-blue-600 dark:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-200">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};
