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
            LLM Fine-tuning
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
            I'm currently pursuing my Master's in Computer Science at California
            State University, Long Beach, where I work as a Graduate Research
            Assistant specializing in multi-agent systems and Large Language
            Model fine-tuning. My research focuses on developing risk analysis
            frameworks to quantify the impact of teammate substitution on
            coordination in AI agent teams.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            With a strong foundation from my Bachelor's degree in Computer
            Science from GITAM University and hands-on experience in both
            research and industry, I combine theoretical knowledge with
            practical skills in AI, machine learning, and full-stack
            development. I'm passionate about creating innovative solutions that
            bridge the gap between cutting-edge research and real-world
            applications.
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
                  Graduate Research Assistant at CSULB
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
                  Multi-agent Systems & LLM Fine-tuning
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
                  B.Tech CSE from GITAM University (2020-2024)
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

      {/* Academic Journey */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Academic{" "}
          <span className="text-blue-600 dark:text-blue-400">Journey</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Master's Degree
            </h4>
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
              California State University, Long Beach
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Computer Science (2024-2026)
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Currently focusing on AI research, multi-agent systems, and Large
              Language Model fine-tuning. Working as Graduate Research Assistant
              on cutting-edge projects.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Bachelor's Degree
            </h4>
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
              GITAM University
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Computer Science & Engineering (2020-2024)
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Built strong foundation in software engineering, data structures,
              algorithms, and full-stack development. Completed multiple
              projects and internships.
            </p>
          </div>
        </div>
      </div>

      {/* Stats or Quick Facts */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            MS
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            Computer Science
          </div>
        </div>
        <div className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            AI
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            Research Focus
          </div>
        </div>
        <div className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            2025
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            Research Started
          </div>
        </div>
        <div className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            CSULB
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            Current University
          </div>
        </div>
      </div>
    </div>
  );
};
