import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="relative rounded-xl overflow-hidden min-h-[600px] flex items-end justify-start p-10 md:p-16 bg-cover bg-center mx-4 sm:mx-6 lg:mx-8 mt-8"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.3) 100%), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`,
        }}
      >
        <div className="max-w-4xl text-white">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            Akash Chowdary Kodali
          </h1>
          <p className="mt-6 text-xl md:text-2xl font-light text-gray-200">
            Master's Student in Computer Science & Graduate Research Assistant
            at California State University, Long Beach
          </p>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Specializing in AI research, multi-agent systems, and full-stack
            development. Currently working on risk analysis frameworks for AI
            agents and fine-tuning Large Language Models.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              Learn More About Me
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-transparent border-2 border-blue-600 rounded-lg hover:bg-blue-600/20 transition-all"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Overview Cards */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          <Link
            to="/about"
            className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">👨‍🎓</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                About
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Master's student at CSULB with a passion for AI research and
              software development. Currently working as a Graduate Research
              Assistant on multi-agent systems and LLM fine-tuning.
            </p>
            <div className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-semibold">
              Learn more →
            </div>
          </Link>

          <Link
            to="/experience"
            className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Research
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Active research in multi-agent systems, risk analysis frameworks,
              and Large Language Model fine-tuning. Published work on team
              coordination and partner transitions in AI agents.
            </p>
            <div className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-semibold">
              View research →
            </div>
          </Link>

          <Link
            to="/expertise"
            className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Expertise
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Expertise in Python, PyTorch, reinforcement learning, full-stack
              development with React and Node.js, and modern development tools
              including Docker and cloud platforms.
            </p>
            <div className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-semibold">
              View skills →
            </div>
          </Link>

          <Link
            to="/projects"
            className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 group"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">💼</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Projects
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              From AI research projects and rental marketplace apps to blood
              bank management systems. Full-stack applications built with modern
              technologies and best practices.
            </p>
            <div className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-semibold">
              View portfolio →
            </div>
          </Link>
        </div>

        {/* Current Status */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-700 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Currently Available for Opportunities
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            I'm actively seeking Software Engineer, AI Research, or Data Science
            positions. Open to full-time opportunities, internships, and
            research collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-blue-600 dark:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-200"
            >
              Get In Touch
            </Link>
            <a
              href="mailto:akodali.dev@gmail.com"
              className="inline-flex items-center bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600/10 dark:hover:bg-blue-400/10 transition-colors duration-200"
            >
              Send Email
            </a>
          </div>
        </div>

        {/* Key Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              MS
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Computer Science
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              CSULB 2024-2026
            </div>
          </div>
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              AI
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Research Focus
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Multi-agent Systems
            </div>
          </div>
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              10+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Projects Built
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Full-stack & AI
            </div>
          </div>
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              Open
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              to Opportunities
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              SWE & Research
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
