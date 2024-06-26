interface navMenuType {
  label: string;
  inMenu: {
    name: string;
    url: string;
  }[];
}

export const navMenu: navMenuType[] = [
  {
    label: "Copilot",
    inMenu: [
      {
        name: "AI Research Assistant",
        url: "/chat-bot-over-sharepoint",
      },
      {
        name: ".DotZ Copilot",
        url: "/chat-bot-over-data",
      },
      {
        name: "AI Health Recorder",
        url: "/translation-secured-sharing",
      },
    ],
  },
  {
    label: "Document Analytics",
    inMenu: [
      {
        name: "Invoice Extractor",
        url: "/invoice-extractor",
      },
      {
        name: "Coding.ai",
        url: "/llm-standardization",
      },
    ],
  },
  {
    label: "Data Generators",
    inMenu: [
      {
        name: "AI Strategy Generator",
        url: "/llm-trend-generators",
      },
      {
        name: "AI Strategy Sense ",
        url: "/ai-strategy-sense",
      },
      {
        name: "AI StratPlanner",
        url: "/charter-generators",
      },
    ],
  },
  {
    label: "Computer Vision",
    inMenu: [
      {
        name: "RetinaScan AI",
        url: "/retina-scan",
      },
      {
        name: "Risk.ai",
        url: "/fraud-prediction",
      },
    ],
  },
  {
    label: "Speech Analytics",
    inMenu: [
      {
        name: "Speech Analyzer",
        url: "/speech-analytics",
      },
    ],
  },
  {
    label: "AI Insights",
    inMenu: [
      {
        name: "Coverage Simulators",
        url: "/coverage-simulators",
      },
    ],
  },
];
