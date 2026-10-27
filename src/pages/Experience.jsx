import React from "react";

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer (Student Assistant)",
      company: "Innovation Team (ITS), California State University, Long Beach",
      location: "Long Beach, CA",
      period: "Dec 2025 - Present",
      type: "Part-time",
      description:
        "AI systems, APIs, CRM data pipelines and Azure infrastructure for CSULB's IT Services.",
      achievements: [
        "Built the 2027 commencement assistant: 4 services on Azure Container Apps, 6 channels built and 4 enabled, and an SMS opt-out gate so STOP never reaches the LLM.",
        "Voice agent for Student Financial Services: led the design and extended a Microsoft sample into production (117 commits), now in staged business testing before students use it.",
        "Traced 34 failed call transfers in 30 days (87% with one error code) to a missing caller ID using App Insights logs, then shipped a fix with a retry and graceful hangup.",
        "Built a daily self-healing secret-rotation workflow in Azure Logic Apps after an expired Entra ID secret took the admin portal down for about 3 weeks.",
        "Sole engineer on the Alumni Event Planner, in final testing ahead of launch: 12 Logic Apps sync RSVPs to Ellucian CRM, with about 1,250 backend tests.",
        "Migrated 4,000+ alumni records into Ellucian Advance CRM with 6 pipelines; a 242-row backfill caught a timezone bug that would have misdated 35% of rows.",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "TypeScript",
        "React",
        "Azure Container Apps",
        "Azure Functions",
        "Service Bus",
        "Azure Logic Apps",
        "Azure AI Search",
        "Bicep",
        "Databricks",
        "Ellucian CRM",
        "pytest",
      ],
      link: null,
    },
    {
      id: 2,
      title: "Graduate Research Assistant",
      company: "California State University, Long Beach",
      location: "Long Beach, CA",
      period: "Jan 2025 - Dec 2026",
      type: "Research",
      description:
        "M.S. thesis, Atlas: Prompting, Web Search and Verification in Large Language Model Bibliographic Retrieval. First-author paper in the ACL Anthology (WASP workshop, IJCNLP-AACL 2025).",
      achievements: [
        "Gemini with web search matched the accuracy of Crossref's purpose-built production matcher (2.6 F1 gap, not statistically significant) on its 2,000-reference benchmark.",
        "Designed the evaluation: paired bootstrap (5,000 resamples), McNemar tests, blind dual human annotation (Cohen's kappa) and an LLM judge.",
        "Wrote 90 of 109 commits in the lab's Python repo.",
        "Built the experiment platform for a multi-agent study of coordination loss when a teammate is swapped mid-task (Overcooked-AI, 450 episodes).",
      ],
      technologies: [
        "Python",
        "OpenAI API",
        "Gemini API",
        "Paired bootstrap",
        "McNemar",
        "Cohen's kappa",
        "Overcooked-AI",
      ],
      link: null,
    },
    {
      id: 3,
      title: "Research & Instructional Student Assistant",
      company: "Gandhi Institute of Technology and Management",
      location: "Visakhapatnam, India",
      period: "Jan 2024 - May 2024",
      type: "Part-time",
      description:
        "Helped students in the Introduction to Big Data lab (Linux) and co-built a distributed collaborative-filtering movie recommender under Dr. Srikanth Thota.",
      achievements: [
        "On MovieLens 100K, Pearson similarity beat cosine similarity (RMSE 1.059 vs 1.069).",
      ],
      technologies: ["Python", "Linux"],
      link: null,
    },
    {
      id: 4,
      title: "Salesforce Developer Intern",
      company: "SmartInternz",
      location: "Remote",
      period: "Apr 2023 - May 2023",
      type: "Internship",
      description:
        "Short internship writing Apex code and automating processes with Process Builder and Flow.",
      achievements: null,
      technologies: null,
      link: "https://smartinternz.com/internships/salesforce_certificates/45c7a284efa7d07f7bb5c9afb3080ffd",
    },
  ];

  const ExperienceCard = ({ item }) => (
    <div className="relative pl-8 pb-12">
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900"></div>

      {/* Timeline line */}
      <div className="absolute left-2 top-4 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>

      {/* Content */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-300">
        <div className="flex flex-wrap items-start justify-between mb-4">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {item.title}
            </h2>
            <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
              {item.company}
              {item.location && (
                <span className="text-gray-600 dark:text-gray-300 font-normal ml-2">
                  , {item.location}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full border border-blue-200 dark:border-blue-700 mb-2">
              {item.period}
            </span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 text-xs rounded-full">
              {item.type}
            </span>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {item.description}
        </p>

        {item.achievements && (
          <ul className="space-y-2 mb-4">
            {item.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  {achievement}
                </span>
              </li>
            ))}
          </ul>
        )}

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

        {item.link && (
          <div className="mt-2">
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
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Experience
        </h1>

        <div className="space-y-0">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} item={exp} />
          ))}
        </div>
      </div>
    </div>
  );
};
