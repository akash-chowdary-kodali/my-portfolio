import React from "react";
import { RESUME_URL } from "../constants/links";

export const Contact = () => {
  const contactLinks = [
    {
      name: "Email",
      value: "akodali.dev@gmail.com",
      href: "mailto:akodali.dev@gmail.com",
      external: false,
    },
    {
      name: "Phone",
      value: "562-846-8353",
      href: "tel:5628468353",
      external: false,
    },
    {
      name: "LinkedIn",
      value: "akashkodali",
      href: "https://linkedin.com/in/akashkodali",
      external: true,
    },
    {
      name: "GitHub",
      value: "akash-chowdary-kodali",
      href: "https://github.com/akash-chowdary-kodali",
      external: true,
    },
    {
      name: "Resume",
      value: "akashkodali.dev/resume",
      href: RESUME_URL,
      external: true,
    },
  ];

  return (
    <div className="max-w-2xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
        <span className="text-blue-600 dark:text-blue-400">Contact</span>
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
        Graduating December 2026, available for roles starting January 2027.
        F-1 OPT, STEM OPT eligible, and open to relocation.
      </p>

      <div className="space-y-4">
        {contactLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-300"
          >
            <span className="text-gray-900 dark:text-white font-semibold">
              {link.name}
            </span>
            <span className="text-gray-600 dark:text-gray-300 text-sm">
              {link.value}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};
