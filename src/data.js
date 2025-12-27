export const profile = {
  name: "Foong Ming",
  headline: "AI Product Manager",
  //location: "Singapore",
  blurb: [
    "I’m an AI product manager and recent NUS Master’s graduate focused on building practical, human-centered LLM products.",
    "Previously, I spent 8 years leading cross-functional teams and shipping AI products across Deep Packet Inspection, Consumer Insights, and Decarbonisation.",
    "I’m interested in making LLM systems more reliable and useful in real settings—through strong evaluation, retrieval, and pragmatic iteration loops."
  ],
  links: [
    { label: "GitHub", href: "https://github.com/foongming" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/REPLACE_ME" },
    { label: "Email", href: "mailto:REPLACE_ME@example.com" },
    { label: "Resume", href: "/resume.pdf" } // optional: put resume.pdf in /public
  ],
  focus: [
    "LLM product development: problem framing, strategy, metrics, iteration loops",
    "RAG systems: retrieval quality, grounding, end-to-end evaluation",
    "Fine-tuning & adaptation: SFT, LoRA/PEFT, data-centric improvement",
    "Language variation & low-resource/colloquial NLP (Singaporean English)",
    "Human-centered evaluation and explainability"
  ],
  projects: [
    {
      category: "Web apps",
      items: [
        {
          title: "Hit the Jackpot! (IT5007)",
          href: "https://github.com/foongming/IT5007Project",
          description:
            "Real-time map view of HDB listings with historical transaction trends."
        },
        {
          title: "LightningCAT",
          href: "#",
          description:
            "Map-first ActiveSG-style web app with AI recommendations."
        }
      ]
    },
    {
      category: "AI / LLM",
      items: [
        {
          title: "Endomondo Dataset Exploration (IT5100F)",
          href: "https://foongming.github.io/it5100f/IT5100F.html",
          description:
            "EDA, PCA, and exercise prediction using only 60s of data."
        },
        {
          title: "News Bias Classification (CS5242)",
          href: "https://github.com/foongming/CS5242Project",
          description:
            "Transformer vs non-transformer approaches for ideological bias classification."
        },
        {
          title: "BERT, Llama and friends tackle SQuADv1.0 (CS4248)",
          href: "https://github.com/foongming/CS4248_Project",
          description:
            "Augmenting models to improve EM/F1; focused experimentation and evaluation."
        },
        {
          title: "Emotional Support Chatbot (CP5105)",
          href: "#",
          description:
            "Studying how Singaporean English affects outcomes in supportive interactions."
        },
        {
          title: "MCAT-How? (Ongoing)",
          href: "#",
          description:
            "RAG bot that personalizes MCAT study plans to user constraints and background."
        }
      ]
    }
  ]
};