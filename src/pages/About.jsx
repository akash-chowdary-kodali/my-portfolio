import React from "react";
import myImg from "../assets/imgs/20220402.webp";

export const About = () => {
  return (
    <div className="max-w-6xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Akash Chowdary Kodali
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Master's student in Computer Science at California State University,
          Long Beach, specializing in AI research and full-stack development
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm border border-blue-200 dark:border-blue-700">
            Graduate Research Assistant
          </span>
          <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm border border-blue-200 dark:border-blue-700">
            AI Researcher
          </span>
          <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm border border-blue-200 dark:border-blue-700">
            Full Stack Developer
          </span>
          <span className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm border border-blue-200 dark:border-blue-700">
            LLM Verification
          </span>
        </div>
      </div>

      {/* Main About Content */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="order-2 lg:order-1">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5 p-2">
              <img
                src={myImg}
                alt="Akash Chowdary Kodali - Computer Science Graduate Student"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* About Text */}
        <div className="order-1 lg:order-2 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a Computer Science master's student who builds across the
            stack. Production AI (LLMs, RAG, and a real-time voice agent),
            full-stack web and mobile (React, Flutter, Node.js), and enterprise
            integrations (Ellucian Advance CRM, Azure Logic Apps, Power BI). As
            a Graduate Research Assistant I work on LLM verification and
            multi-agent systems. At DoIT I build and ship internal tools and
            automations for the university.
          </p>

          {/* Key Highlights */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-3"></div>
              <div>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  🎓 Current Education:
                </span>
                <span className="text-gray-600 dark:text-gray-300 ml-2">
                  MS Computer Science, CSULB (2024-2026)
                </span>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-3"></div>
              <div>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  🔬 Current Role:
                </span>
                <span className="text-gray-600 dark:text-gray-300 ml-2">
                  Graduate Research Assistant & DoIT Student Assistant at
                  CSULB
                </span>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-3"></div>
              <div>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  🎯 Research Focus:
                </span>
                <span className="text-gray-600 dark:text-gray-300 ml-2">
                  LLM Verification & Multi-agent Systems
                </span>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-3"></div>
              <div>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  📚 Background:
                </span>
                <span className="text-gray-600 dark:text-gray-300 ml-2">
                  B.Tech CSE from Gandhi Institute of Technology and Management
                  (2020-2024). Served as a Research & Instructional Student
                  Assistant in Big Data.
                </span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="pt-6">
            <a
              href="mailto:akodali.dev@gmail.com"
              className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          <span className="text-blue-600 dark:text-blue-400">Education</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Master's */}
          <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-300">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                Master of Science (MS)
              </h4>
              <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full border border-blue-200 dark:border-blue-700">
                Aug. 2024 – Dec. 2026
              </span>
            </div>
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
              California State University, Long Beach
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
              Computer Science
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
              Long Beach, CA
            </p>
            <h5 className="text-gray-900 dark:text-white font-semibold text-sm mb-2">
              Key Courses:
            </h5>
            <div className="flex flex-wrap gap-2">
              {[
                "Advanced Machine Learning",
                "Multi-Agent Systems",
                "Natural Language Processing",
                "Reinforcement Learning",
                "Advanced Algorithms",
                "Research Methods in CS",
              ].map((course, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700/50 text-blue-600 dark:text-blue-400 text-xs rounded border border-gray-300 dark:border-gray-600"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Bachelor's */}
          <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-300">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                Bachelor of Technology (B.Tech)
              </h4>
              <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full border border-blue-200 dark:border-blue-700">
                Aug. 2020 – May 2024
              </span>
            </div>
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
              Gandhi Institute of Technology and Management
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
              Computer Science and Engineering
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
              Visakhapatnam, India
            </p>
            <h5 className="text-gray-900 dark:text-white font-semibold text-sm mb-2">
              Key Courses:
            </h5>
            <div className="flex flex-wrap gap-2">
              {[
                "Data Structures and Algorithms",
                "Database Management Systems",
                "Web Technologies",
                "Software Engineering",
                "Mobile Application Development",
                "Computer Networks",
              ].map((course, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700/50 text-blue-600 dark:text-blue-400 text-xs rounded border border-gray-300 dark:border-gray-600"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
