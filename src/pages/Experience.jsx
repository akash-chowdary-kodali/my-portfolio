import React from "react";
import { Link } from "react-router-dom";

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "DoIT Innovation Team - Student Assistant",
      company: "California State University, Long Beach",
      location: "Long Beach, CA",
      period: "Dec 2025 - Present",
      type: "Part-time",
      description:
        "Built and deployed a production AI voice agent for Student Financial Services, plus integrations and automations across campus enterprise systems.",
      achievements: [
        "Built and deployed a production AI voice agent for Student Financial Services, covering real-time audio streaming, RAG-powered knowledge retrieval, and a React portal that staff use day to day.",
        "Designed and integrated secure REST APIs and backend services to exchange data across Ellucian Advance CRM, Oracle SQL, and third-party platforms (DocuSign, Qualtrics, Gravity).",
        "Built integrations and automations with Azure Logic Apps and Power Automate, and surfaced operational data in Power BI dashboards, retiring manual cross-functional workflows.",
      ],
      technologies: [
        "Azure",
        "Azure Logic Apps",
        "Power Automate",
        "Power BI",
        "Ellucian Advance CRM",
        "Oracle SQL",
        "REST APIs",
        "React",
      ],
      link: null,
    },
    {
      id: 2,
      title: "Graduate Research Assistant",
      company: "California State University, Long Beach",
      location: "Long Beach, CA",
      period: "Jan 2025 - Present",
      type: "Research",
      description:
        "Co-developed Atlas, an LLM verification pipeline accepted at the AACL-IJCNLP 2025 Workshop (WASP), and built a multi-agent coordination-risk framework on the Overcooked-AI benchmark.",
      achievements: [
        "Co-developed Atlas, an LLM verification pipeline that checks model output for hallucination, accepted at the AACL-IJCNLP 2025 Workshop (WASP) with Dr. Xin Qin, Dr. Hailu Xu, and Dr. Wenlu Xu. It reached 83.3% accuracy versus 46.2% for GPT-4 on our benchmark.",
        "Built a risk-analysis framework on the Overcooked-AI benchmark using Value-at-Risk to quantify multi-agent coordination risk at the 95th percentile of spatial divergence.",
        "Showed that human-aware agents kept better reward efficiency and coordination through partner transitions.",
      ],
      technologies: [
        "Python",
        "PyTorch",
        "LLMs",
        "Multi-Agent Systems",
        "Value-at-Risk",
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
        "Guided peers in the Introduction to Big Data course, providing technical guidance on the Hadoop ecosystem, including MapReduce, Hive, and PySpark within a Linux environment.",
      achievements: [
        "Guided peers in the Introduction to Big Data course, providing technical guidance on the Hadoop ecosystem",
        "Collaborated with a peer under the guidance of Dr. Srikanth Thota to design and prototype a distributed collaborative filtering system",
        "Benchmarked Pearson Correlation and Cosine Similarity via MSE/RMSE metrics",
      ],
      technologies: ["Hadoop", "MapReduce", "Hive", "PySpark", "Linux"],
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
        "Developed and optimized Apex code to enhance Salesforce functionality and automate business processes. Learned workflow automation and delivered high-quality Salesforce solutions.",
      achievements: [
        "Automated complex business processes using Apex, Process Builder, and Flow, enhancing functionality and improving operational efficiency by 30%.",
        "Delivered high-quality, customized Salesforce solutions by gathering business requirements, increasing productivity, and conducting thorough testing and debugging.",
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
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {item.title}
            </h3>
            <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
              {item.company}
              {item.location && (
                <span className="text-gray-600 dark:text-gray-300 font-normal ml-2">
                  • {item.location}
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

        {/* Achievements */}
        {item.achievements && (
          <div className="mb-4">
            <h4 className="text-gray-900 dark:text-white font-semibold mb-3">
              Key Achievements:
            </h4>
            <ul className="space-y-2">
              {item.achievements.map((achievement, index) => (
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
            Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and the skills I've developed along the
            way.
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
          <Link
            to="/contact"
            className="inline-block bg-blue-600 dark:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-200"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};
