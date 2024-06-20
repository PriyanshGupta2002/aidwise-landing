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
        name: "Chatbot Over SharePoint",
        url: "/chat-bot-over-sharepoint",
      },
      {
        name: "Chatbot Over Data",
        url: "/chat-bot-over-data",
      },
      {
        name: "Translation & Secured Sharing",
        url: "/translation-secured-sharing",
      },
    ],
  },
  {
    label: "Document Analytics",
    inMenu: [
      {
        name: "Invoice Extractor",
        url: "#",
      },
      {
        name: "LLM Standardization",
        url: "/llm-standardization",
      },
    ],
  },
  {
    label: "Data Generators",
    inMenu: [
      {
        name: "LLM Trend Generators",
        url: "/llm-trend-generators",
      },
      {
        name: "Charter Generators",
        url: "/charter-generators",
      },
    ],
  },
  {
    label: "Computer Vision",
    inMenu: [
      {
        name: "Disease Prediction",
        url: "#",
      },
      {
        name: "Fraud Prediction",
        url: "/fraud-prediction",
      },
    ],
  },
  {
    label: "Speech Analytics",
    inMenu: [
      {
        name: "Call Cluster Prediction",
        url: "#",
      },
    ],
  },
  {
    label: "AI Insights",
    inMenu: [
      {
        name: "Coverage Simulators",
        url: "#",
      },
    ],
  },
];
