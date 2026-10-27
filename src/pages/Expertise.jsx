import React from "react";

export const Skills = () => {
  // Every skill here appears on at least one of the three resumes, with the work that proves it.
  const skillCategories = [
    {
      id: 1,
      title: "AI & LLM",
      description: "Voice agents, retrieval and LLM systems",
      skills: [
        { name: "OpenAI Whisper", proof: "Voice agent call transcription" },
        { name: "Azure Voice Live (gpt-realtime)", proof: "Voice agent" },
        { name: "Tool calling", proof: "Voice agent, 4 tools" },
        { name: "RAG", proof: "Voice agent, Health Q&A agent" },
        { name: "Azure AI Search", proof: "Voice agent, hybrid + semantic" },
        { name: "OpenAI and Gemini APIs", proof: "Atlas thesis" },
        { name: "Prompt-injection defense", proof: "Commencement assistant" },
        { name: "LoRA fine-tuning", proof: "Health Q&A agent (Gemma-2-2B)" },
        { name: "FAISS", proof: "Health Q&A agent, 6,021 documents" },
        { name: "llama.cpp", proof: "LLM inference benchmark" },
        { name: "PyTorch", proof: "LLM inference benchmark" },
      ],
    },
    {
      id: 2,
      title: "Evaluation",
      description: "Measuring whether a model or system actually works",
      skills: [
        { name: "Paired bootstrap", proof: "Atlas thesis" },
        { name: "McNemar tests", proof: "Atlas thesis" },
        { name: "Cohen's kappa", proof: "Atlas thesis, annotator agreement" },
        { name: "LLM judge", proof: "Atlas thesis" },
        { name: "Roofline model", proof: "LLM inference benchmark" },
      ],
    },
    {
      id: 3,
      title: "Backend & frontend",
      description: "APIs, services and the apps on top of them",
      skills: [
        { name: "Python", proof: "CSULB work and research" },
        { name: "FastAPI", proof: "Voice agent, Event Planner, commencement assistant" },
        { name: "REST APIs", proof: "Event Planner API" },
        { name: "Azure Functions", proof: "Event Planner, DocuSign router" },
        { name: "Azure Service Bus", proof: "Commencement assistant session queues" },
        { name: "SQL", proof: "Production FastAPI service" },
        { name: "Oracle", proof: "Bind-variable fix in production" },
        { name: "pytest", proof: "Voice agent CI, Event Planner" },
        { name: "React", proof: "Event Planner, admin consoles" },
        { name: "TypeScript", proof: "Event Planner" },
      ],
    },
    {
      id: 4,
      title: "Data & integration",
      description: "Moving records between university systems",
      skills: [
        { name: "Ellucian CRM", proof: "4,000+ alumni records migrated" },
        { name: "Ellucian Ethos API", proof: "Event Planner guest matching" },
        { name: "Dataverse Web API", proof: "Bounce sync into Advance CRM" },
        { name: "Databricks", proof: "Bounce sync jobs" },
        { name: "Qualtrics", proof: "Event Planner RSVP surveys" },
        { name: "SharePoint", proof: "O365/SharePoint API, 10+ services daily" },
        { name: "Azure Logic Apps", proof: "Event Planner, 12 Logic Apps" },
      ],
    },
    {
      id: 5,
      title: "Azure cloud",
      description: "Where the CSULB systems run",
      skills: [
        { name: "Azure Container Apps", proof: "Commencement assistant, voice agent" },
        { name: "Docker", proof: "Container Apps images" },
        { name: "Static Web Apps", proof: "Event Planner" },
        { name: "Blob storage", proof: "Event Planner QR codes" },
        { name: "Key Vault", proof: "Voice agent, Databricks secrets" },
        { name: "Managed identity", proof: "Voice agent" },
        { name: "Entra ID", proof: "Event Planner sign-in and roles" },
        { name: "Azure Communication Services", proof: "Voice agent calls and SMS" },
      ],
    },
    {
      id: 6,
      title: "Delivery & observability",
      description: "Shipping changes safely and seeing what breaks",
      skills: [
        { name: "Bicep", proof: "Voice agent infrastructure" },
        { name: "Azure DevOps", proof: "Voice agent pipeline" },
        { name: "Approval-gated CI/CD", proof: "59 tests before each deploy" },
        { name: "App Insights", proof: "Voice agent telemetry" },
        { name: "KQL", proof: "P95/P99 latency queries" },
        { name: "Metric alerts", proof: "4 alerts on the voice agent" },
      ],
    },
  ];

  const SkillCard = ({ category }) => (
    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 group">
      <div className="flex items-center mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {category.title}
        </h3>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        {category.description}
      </p>

      <div className="space-y-3">
        {category.skills.map((skill, index) => (
          <div key={index}>
            <div className="text-gray-900 dark:text-white font-medium">
              {skill.name}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {skill.proof}
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
          The languages, frameworks, cloud services and tools I use in my
          work at CSULB, my research and my projects.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
        {skillCategories.map((category) => (
          <SkillCard key={category.id} category={category} />
        ))}
      </div>

      {/* Numbers from the work */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-700">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            ["6 / 5", "Channels built / enabled", "Commencement assistant"],
            ["4,000+", "Alumni records migrated", "Ellucian Advance CRM"],
            ["12", "Azure Logic Apps", "Event RSVPs to the CRM"],
            ["~1,250", "Backend tests", "Alumni Event Planner"],
          ].map(([value, title, detail]) => (
            <div key={title}>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {value}
              </div>
              <div className="text-gray-900 dark:text-white font-semibold mb-1">
                {title}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
