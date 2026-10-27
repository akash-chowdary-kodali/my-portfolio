import React from "react";
import FAARentalApp from "../assets/imgs/FAARental_App.webp";
import G_Bloodbank from "../assets/imgs/gitamBloodbank.webp";
import Weatherimg from "../assets/imgs/WeatherApp.webp";
import WhatsappImg from "../assets/imgs/WhatsappClone.webp";

export const Projects = () => {
  const aiImage =
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  // Top work, written as short case studies.
  const featuredProjects = [
    {
      id: 0,
      title: "AI Voice Agent, CSULB Student Financial Services",
      image: null,
      diagram: `${process.env.PUBLIC_URL}/diagrams/voice-agent.svg`,
      diagramAlt:
        "Architecture: a caller reaches Azure Communication Services, Event Grid sends the incoming call to the FastAPI voice agent on Container Apps, which streams audio to Azure Voice Live (gpt-realtime and Whisper) with 4 tools, queries Azure AI Search, stores transcripts in Blob storage, and is deployed by Azure DevOps CI/CD.",
      technologies: ["Python", "FastAPI", "Azure", "React", "Docker", "Bicep"],
      category: "CSULB Work",
      caseStudy: {
        problem:
          "A bilingual (English and Spanish) phone line for Student Financial Services questions, with a handoff to a person when needed.",
        built:
          "Led the design and extended a Microsoft sample into production (117 commits). A FastAPI service streams Azure Communication Services call audio through OpenAI Whisper and Azure Voice Live (gpt-realtime); the model calls 4 tools (RAG search, SMS, transfer, end call). Answers come from Azure AI Search with hybrid BM25, vector and semantic ranking. Infrastructure is in Bicep and ships through an approval-gated CI/CD pipeline that runs 59 pytest tests.",
        result:
          "Deployed to production and in staged business testing before students use it. Traced 34 failed call transfers in 30 days to a missing caller ID and shipped a fix; fixed a race that announced a transfer 3 times without attempting it.",
      },
    },
    {
      id: 1,
      title: "Commencement Assistant",
      image: null,
      diagram: `${process.env.PUBLIC_URL}/diagrams/commencement-assistant.svg`,
      diagramAlt:
        "Architecture: SMS, WhatsApp and Telegram webhooks reach an ingress gateway that queues messages on Service Bus; a core engine on Container Apps processes one conversation at a time with gpt-4o-mini on Azure AI Foundry and Table Storage; web, Teams and Copilot users reach the core directly or through Azure Bot Service and a bridge; staff use an admin console.",
      technologies: [
        "Python",
        "Azure Container Apps",
        "Service Bus",
        "Docker",
        "gpt-4o-mini",
        "React",
      ],
      category: "CSULB Work",
      caseStudy: {
        problem:
          "Answer questions about the 2027 commencement over SMS, web, Teams, Copilot and Telegram.",
        built:
          "Designed and built 4 services on Azure Container Apps (Docker images) joined by Service Bus session queues, answering from a 19-topic knowledge base on gpt-4o-mini. 6 channels built, 5 enabled. SMS opt-outs are handled by a deterministic gate so STOP never reaches the LLM, with prompt-injection defense (9 checks), a 14-URL link allow-list and per-conversation rate limits, covered by 107 tests. A 10-page React admin console sits on top.",
        result:
          "Not yet used by real users. Fixed an outage where it stopped replying on every channel (long LLM turns outlived the 30-second Service Bus lock) with lock auto-renewal, safe redelivery and session re-acquisition. Replaced vector search, Cosmos DB and AI Search with whole-knowledge-base grounding, removing three services.",
      },
    },
    {
      id: 2,
      title: "Alumni Event Planner",
      image: null,
      diagram: `${process.env.PUBLIC_URL}/diagrams/alumni-event-planner.svg`,
      diagramAlt:
        "Architecture: planners sign in to a React app on Static Web Apps that calls a FastAPI API on Azure Functions; the API records check-ins in Table storage first, writes SharePoint lists and triggers 12 Logic Apps that sync guests and attendance with Ellucian CRM, manage Qualtrics surveys and send QR emails through Microsoft Graph; a 5-minute timer retries.",
      technologies: [
        "React 19",
        "TypeScript",
        "FastAPI",
        "Azure Functions",
        "Logic Apps",
        "Entra ID",
      ],
      category: "CSULB Work",
      caseStudy: {
        problem:
          "Run CSULB alumni events for University Relations: RSVPs, QR check-in and sync to the alumni CRM.",
        built:
          "Sole engineer. React 19 and TypeScript on Azure Static Web Apps, a FastAPI REST API on Azure Functions, Entra ID sign-in with app-enforced roles, and offline-tolerant QR check-in (QR codes cached in Blob storage). 12 Logic Apps clone a Qualtrics survey per event, match or create each guest in Ellucian CRM through the Ethos API and email a signed QR code; unmatched guests go to a human review queue instead of creating duplicates.",
        result:
          "In final testing ahead of launch, with about 1,250 backend pytest and 120 frontend tests passing. Reverse-engineered an undocumented Ellucian participant contract, then switched to run-time ID lookup so RSVP writes survive CRM data refreshes.",
      },
    },
    {
      id: 3,
      title: "Atlas: LLMs for Bibliographic Retrieval",
      image: aiImage,
      technologies: ["Python", "OpenAI API", "Gemini API"],
      category: "Publication",
      githubUrl: "https://akashkodali.dev/atlas-p",
      linkLabel: "Paper",
      caseStudy: {
        problem:
          "How often do LLMs get citations right? First-author paper in the ACL Anthology (WASP workshop, IJCNLP-AACL 2025).",
        built:
          "For my M.S. thesis, I measured how prompting, web search and verification change the DOI accuracy of GPT and Gemini against Crossref's production matcher on its 2,000-reference benchmark. The evaluation uses paired bootstrap, McNemar tests and blind dual human annotation.",
        result:
          "Gemini with web search matched the accuracy of Crossref's purpose-built matcher (2.6 F1 gap, not statistically significant).",
      },
    },
    {
      id: 4,
      title: "Cross-Platform LLM Inference Benchmark",
      image: aiImage,
      technologies: ["Python", "llama.cpp", "PyTorch"],
      category: "Course Project",
      githubUrl: "https://akashkodali.dev/llm-bench",
      caseStudy: {
        problem:
          "How does LLM decode speed change across hardware and quantization levels?",
        built:
          "Profiled LLaMA 3.2 1B and 3B decoding in llama.cpp on Apple M4, M4 Pro, NVIDIA A100 and x86 across F16, Q8 and Q4, using PyTorch hooks and a roofline model.",
        result:
          "Decode throughput tracks memory bandwidth (R^2 > 0.99). 4-bit quantization gives a 2.37x speedup on M4 but only 1.07x on A100.",
      },
    },
  ];

  const researchProjects = [
    {
      id: 5,
      title: "Risk Analysis in Multi-Agent Teams",
      description:
        "I built the experiment platform for a multi-agent study of coordination loss when a teammate is swapped mid-task. It runs agents in Overcooked-AI (450 episodes), scores coordination risk with Value-at-Risk, and includes an LLM agent layer for OpenAI, Gemini and Ollama. The paper is in progress.",
      image: aiImage,
      technologies: ["Python", "Overcooked-AI", "OpenAI", "Gemini", "Ollama"],
      category: "AI Research",
      githubUrl: "https://akashkodali.dev/risk",
    },
    {
      id: 6,
      title: "Ontology-Grounded Vision-LLM Risk Detection",
      description:
        "Grounded three vision LLMs (GPT-4o-mini, Gemini and Pixtral) in a custom driving-risk ontology across 972 calls. Valid structured (RDF) output rose from 60.1% to 96.9% and precision rose 45% (relative), at a 41% recall cost.",
      image: aiImage,
      technologies: ["Python", "OWL/RDF", "rdflib", "GPT-4o-mini", "Gemini", "Pixtral"],
      category: "Course Project",
      githubUrl: "https://akashkodali.dev/ontology",
    },
    {
      id: 7,
      title: "Health Insurance Q&A Agent",
      description:
        "Built FAISS retrieval over 6,021 CMS Marketplace documents, fine-tuned Gemma-2-2B with LoRA on 18,020 synthetic Q&A pairs, and routed live-data questions to the healthcare.gov API, served through FastAPI and Streamlit.",
      image: aiImage,
      technologies: ["FAISS", "LoRA", "Gemma-2-2B", "FastAPI", "Streamlit"],
      category: "Course Project",
      githubUrl: "https://akashkodali.dev/health-agent",
    },
  ];

  const earlierProjects = [
    {
      id: 8,
      title: "Furniture and Appliances Rental App",
      description:
        "Built a cross-platform rental marketplace end to end (Dec 2023 - Mar 2025): a Flutter app with Bloc state management and encrypted on-device token storage, an Express.js REST API, and MongoDB for inventory, rentals and users.",
      image: FAARentalApp,
      technologies: ["Flutter", "Express.js", "Node.js", "MongoDB"],
      category: "Full Stack",
      githubUrl: "https://akashkodali.dev/rental",
    },
    {
      id: 9,
      title: "GIMSR Blood Bank",
      description:
        "Built a blood bank web app for GIMSR: donor and blood-request forms in React and Bootstrap, a Firebase real-time database, an admin dashboard to approve donations and requests, and automatic email notifications.",
      image: G_Bloodbank,
      technologies: ["React", "Firebase", "Bootstrap"],
      category: "Web Application",
      githubUrl: "https://akashkodali.dev/bloodbank",
    },
    {
      id: 10,
      title: "Big Data Movie Recommendation System",
      description:
        "Co-built a distributed user-based collaborative-filtering system in Python to predict movie ratings. On the MovieLens 100K dataset, Pearson similarity (RMSE 1.059) beat cosine similarity (RMSE 1.069).",
      image: aiImage,
      technologies: ["Python"],
      category: "Big Data",
      githubUrl: "https://akashkodali.dev/movie",
    },
    {
      id: 11,
      title: "WhatsApp UI Clone",
      description:
        "A learning project to explore Flutter: a UI clone of WhatsApp built to learn Flutter's UI elements, widget composition, and state management basics, including 'TabBar' for navigation, 'ListView.builder' for scrollable lists, and 'StatefulWidget' for UI interactions.",
      image: WhatsappImg,
      technologies: ["Flutter"],
      category: "Mobile App",
      githubUrl: "https://akashkodali.dev/whatsapp-clone",
    },
    {
      id: 12,
      title: "React Weather Application",
      description:
        "A learning project for React and data fetching: a single-page weather app that uses useState and fetch to call the OpenWeatherMap API and update the UI without reloads.",
      image: Weatherimg,
      technologies: ["React", "API"],
      category: "Web Application",
      githubUrl: "https://akashkodali.dev/weather",
    },
  ];

  const LinkButton = ({ project }) => (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
    >
      {project.linkLabel || "Code"}
    </a>
  );

  const ProjectCard = ({ project, featured = false }) => (
    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 group">
      {/* Header: image when there is one, plain text band otherwise */}
      {project.image ? (
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-blue-600/90 text-white text-sm font-semibold rounded-full">
              {project.category}
            </span>
          </div>
          {featured && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                Featured
              </span>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-between px-6 py-4 bg-blue-600/10 dark:bg-blue-400/10 border-b border-gray-200 dark:border-gray-700">
          <span className="px-3 py-1 bg-blue-600/90 text-white text-sm font-semibold rounded-full">
            {project.category}
          </span>
          {featured && (
            <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
              Featured
            </span>
          )}
        </div>
      )}

      {project.diagram && (
        <a
          href={project.diagram}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-6 pt-6"
          aria-label={`Open the ${project.title} architecture diagram`}
        >
          <img
            src={project.diagram}
            alt={project.diagramAlt}
            loading="lazy"
            className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700"
          />
        </a>
      )}

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        {project.caseStudy ? (
          <dl className="space-y-3 mb-4 text-sm leading-relaxed">
            {[
              ["Problem", project.caseStudy.problem],
              ["What I built", project.caseStudy.built],
              ["Result", project.caseStudy.result],
            ].map(([label, text]) => (
              <div key={label}>
                <dt className="text-gray-900 dark:text-white font-semibold">
                  {label}
                </dt>
                <dd className="text-gray-600 dark:text-gray-300">{text}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {project.description}
          </p>
        )}

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700/50 text-blue-600 dark:text-blue-400 text-xs rounded border border-gray-300 dark:border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.githubUrl && <LinkButton project={project} />}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto pt-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        <span className="text-blue-600 dark:text-blue-400">Projects</span>
      </h1>

      <section className="mb-16" aria-labelledby="featured-work">
        <h2
          id="featured-work"
          className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Featured work
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured={true} />
          ))}
        </div>
      </section>

      <section className="mb-16" aria-labelledby="research-projects">
        <h2
          id="research-projects"
          className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Research and course projects
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {researchProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="mb-16" aria-labelledby="earlier-projects">
        <h2
          id="earlier-projects"
          className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
        >
          Earlier projects
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {earlierProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <p className="text-center text-gray-600 dark:text-gray-300">
        More code on{" "}
        <a
          href="https://github.com/akash-chowdary-kodali"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          GitHub
        </a>
        . The CSULB work is private, so it has no code link.
      </p>
    </div>
  );
};
