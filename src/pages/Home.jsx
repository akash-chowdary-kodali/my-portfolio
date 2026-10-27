import React from "react";
import { Link } from "react-router-dom";
import { RESUME_URL } from "../constants/links";

const GITHUB_URL = "https://github.com/akash-chowdary-kodali";
const LINKEDIN_URL = "https://linkedin.com/in/akashkodali";
const PAPER_URL = "https://aclanthology.org/2025.wasp-main.14";

const heroButton =
  "inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg transition-colors";

const stats = [
  {
    value: "ACL 2025",
    label: "First-author paper",
    detail: "WASP workshop, IJCNLP-AACL 2025",
  },
  {
    value: "4,000+",
    label: "Alumni records migrated",
    detail: "Into Ellucian Advance CRM",
  },
  {
    value: "12",
    label: "Azure Logic Apps",
    detail: "Syncing event RSVPs to the CRM",
  },
  {
    value: "~1,250",
    label: "Backend tests",
    detail: "Alumni Event Planner (pytest)",
  },
];

const selectedWork = [
  {
    title: "Voice agent, Student Financial Services",
    text: "Bilingual phone agent built on a Microsoft sample (117 commits). Deployed to production and in staged business testing before students use it.",
  },
  {
    title: "Commencement assistant",
    text: "Designed and built for the 2027 commencement: 4 services on Azure Container Apps, 6 channels built and 4 enabled. Not yet used by real users.",
  },
  {
    title: "Alumni Event Planner",
    text: "Sole engineer. RSVPs, QR check-in and CRM sync on Azure, in final testing ahead of launch.",
  },
];

export const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="relative rounded-xl overflow-hidden min-h-[520px] flex items-end justify-start p-8 md:p-16 bg-cover bg-center mx-4 sm:mx-6 lg:mx-8 mt-8"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.4) 100%), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`,
        }}
      >
        <div className="max-w-4xl text-white">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            Akash Chowdary Kodali
          </h1>
          <p className="mt-4 text-2xl md:text-3xl font-light text-gray-100">
            Software Engineer, AI &amp; Cloud
          </p>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            First-author paper in the ACL Anthology (WASP workshop,
            IJCNLP-AACL 2025), and Azure systems I built at CSULB: a voice
            agent, a commencement assistant and the Alumni Event Planner.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${heroButton} text-white bg-blue-600 hover:bg-blue-700`}
            >
              Resume
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${heroButton} text-white border border-gray-300 hover:bg-white/10`}
            >
              GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${heroButton} text-white border border-gray-300 hover:bg-white/10`}
            >
              LinkedIn
            </a>
            <a
              href={PAPER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${heroButton} text-white border border-gray-300 hover:bg-white/10`}
            >
              Paper
            </a>
          </div>
          <p className="mt-6 text-base text-gray-300 max-w-2xl">
            Graduating December 2026, available for roles starting January
            2027. F-1 OPT, STEM OPT eligible, and open to relocation.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Key numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-900 dark:text-gray-100 font-medium">
                {stat.label}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Selected work */}
        <section className="mt-20" aria-labelledby="selected-work">
          <div className="flex items-baseline justify-between mb-6">
            <h2
              id="selected-work"
              className="text-3xl font-bold text-gray-900 dark:text-white"
            >
              Selected work
            </h2>
            <Link
              to="/projects"
              className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              All projects
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selectedWork.map((item) => (
              <Link
                key={item.title}
                to="/projects"
                className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.text}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section className="mt-20" aria-labelledby="publications">
          <h2
            id="publications"
            className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Publications
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                <strong>Kodali, A.</strong>, et al. Atlas: Customizing Large
                Language Models for Reliable Bibliographic Retrieval and
                Verification. WASP Workshop, IJCNLP-AACL 2025.
              </p>
              <a
                href={PAPER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                aclanthology.org/2025.wasp-main.14
              </a>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                <strong>M.S. thesis:</strong> Atlas: Prompting, Web Search and
                Verification in Large Language Model Bibliographic Retrieval.
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Gemini with web search matched the accuracy of Crossref's
                purpose-built matcher (2.6 F1 gap, not statistically
                significant).
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
