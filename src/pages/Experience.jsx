import React from "react";
import { Link } from "react-router-dom";

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
        "I build AI systems, APIs, CRM data pipelines and Azure infrastructure for CSULB's IT Services: a voice agent, a commencement assistant, an alumni event platform, and integrations with Ellucian CRM, DocuSign and SharePoint.",
      achievements: [
        "Designed and built an AI commencement assistant for the 2027 commencement: 4 services on Azure Container Apps joined by Service Bus session queues, answering from a 19-topic knowledge base on gpt-4o-mini across 6 channels built, 4 enabled (SMS, web, Teams, Copilot).",
        "Fixed an outage where the commencement assistant stopped replying on every channel: long LLM turns outlived the 30-second Service Bus lock; added lock auto-renewal, safe redelivery through duplicate checks, and session re-acquisition.",
        "Sole engineer on the Alumni Event Planner, in final testing on Azure ahead of launch for CSULB alumni events: React 19 and TypeScript front end, FastAPI on Azure Functions, Entra ID roles, offline-tolerant QR check-in, and 12 Logic Apps that sync RSVPs to Ellucian CRM through the Ethos API. About 1,250 backend pytest and 120 frontend tests.",
        "Led the design of the Student Financial Services voice agent and extended a Microsoft sample into production (117 commits): bilingual (English and Spanish) calls via OpenAI Whisper and Azure Voice Live (gpt-realtime), now in staged business testing before students use it.",
        "Traced 34 failed call transfers in 30 days to a missing caller ID on the outbound phone leg using App Insights logs, and shipped a fix that passes an owned caller ID with a retry-then-graceful-hangup path.",
        "Defined the voice agent's Azure infrastructure in Bicep and shipped it through an approval-gated CI/CD pipeline in Azure DevOps that runs 59 pytest tests before deploy; built a daily secret-rotation workflow in Azure Logic Apps after an expired secret took the admin portal down.",
        "Scheduled 6 Ellucian Data Connect pipelines that have migrated 4,000+ alumni records from Advance Web to Advance CRM, and built Databricks jobs that write Constant Contact bounces into the new CRM (bounce sync scheduled weekly).",
        "Fixed the production DocuSign Connect router on Azure Functions (4 filename variants it was silently dropping) and hardened a shared O365/SharePoint API that 10+ services call daily (Microsoft Graph retry with backoff, thread-safe token cache).",
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
        "Measured how prompting, web search (OpenAI and Gemini APIs with tool calling) and verification change the DOI accuracy of GPT and Gemini against Crossref's production matcher on its 2,000-reference benchmark. Gemini with web search matched the accuracy of Crossref's purpose-built matcher (2.6 F1 gap, not statistically significant).",
        "Designed the evaluation: paired bootstrap (5,000 resamples) with adjusted p-values, McNemar tests, blind dual human annotation with hidden controls plus an LLM judge (agreement by Cohen's kappa), and a rule-based verifier. Wrote 90 of 109 commits in the lab's Python repo.",
        "Built the experiment platform for a multi-agent study of coordination loss when a teammate is swapped mid-task (Overcooked-AI, 450 episodes, Value-at-Risk scoring), including an LLM agent layer for OpenAI, Gemini and Ollama.",
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
        "Taught the Introduction to Big Data lab under Dr. Srikanth Thota and co-built a distributed collaborative-filtering recommender.",
      achievements: [
        "Helped students in the Introduction to Big Data lab with the course tools in a Linux environment",
        "Co-built a distributed collaborative-filtering movie recommender with a peer under the guidance of Dr. Srikanth Thota",
        "On MovieLens 100K, Pearson similarity beat cosine similarity (RMSE 1.059 vs 1.069)",
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
        "Wrote Apex code and set up workflow automation in Salesforce during a short internship.",
      achievements: [
        "Automated business processes using Apex, Process Builder, and Flow.",
        "Gathered requirements for custom Salesforce solutions and tested and debugged them.",
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
            I'm open to talking about full-time roles starting January 2027
            and interesting projects.
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
