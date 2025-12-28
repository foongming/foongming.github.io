// src/data.js

export const profile = {
  name: "Hi, I'm Foong Ming!",
  headline: "AI Product Manager | Social Impact & Climate Tech",
  // location: "Singapore",
  blurb: [
    "Senior Product Manager with 8+ years building AI B2B products across telecom analytics, consumer insights, and decarbonisation.",
    "Recently completed an NUS Master of Computing, including research on adapting LLMs for emotional-support interactions in low-resource dialects.",
    "Currently exploring roles that apply AI to measurable social good: climate, public sector delivery, and responsible human-centered AI systems."
  ],

  links: [
    { label: "GitHub", href: "https://github.com/foongming" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/laifoongming" },
    { label: "Email", href: "mailto:laifoongming@gmail.com" },
    { label: "Resume", href: "/20251225_LAI_Foong_Ming.pdf" }
  ],

  education: [
    {
      degree: "Master of Computing",
      school: "National University of Singapore",
      dates: "Aug 2023 – Dec 2025",
      highlights: [
        "GPA: 4.65/5.00",
        "<a href='https://aisingapore.org/research/dso-aisg-research-awards/' target='_blank' rel='noopener noreferrer' style='text-decoration: underline;'>DSO–AISG Incentive Award for LLM Research</a>",
        "Capstone: Speaking Your Language: Adapting LLMs for Singlish Emotional Support Chatbots",
        "Research Lab: AI for Social Good (AI4SG) - <a href='https://ai4sg.org' target='_blank' rel='noopener noreferrer' style='text-decoration: underline;'>ai4sg.org</a>",
        "Teaching Assistant: CS5224 Cloud Computing"
      ]
    },
    {
      degree: "Bachelor of Business Management (Finance & Marketing)",
      school: "Singapore Management University",
      dates: "Aug 2012 – Jun 2016",
      highlights: [
        "GPA: 3.44/4.00 (Cum Laude)",
        "Teaching Assistant: IS102 Computer as an Analysis Tool"
      ]
    }
  ],

  experience: [
    {
      company: "Terrascope",
      companyUrl: "https://www.terrascope.com",
      title: "Senior Product Manager",
      dates: "Aug 2022 – Nov 2024",
      overview: "B2B SaaS platform for carbon accounting and decarbonisation planning.",
      examples: [
        { label: "Decarbonise with AI", href: "https://www.terrascope.com/solutions/decarbonise-with-ai" }
      ],
      highlights: [
        "Shipped four AI-enabled products in nine months to evolve the platform from measurement into end-to-end decarbonisation planning.",
        "Reduced lead time for new AI capabilities from months to days by driving MVP delivery; launched industry-standard MACC capability.",
        "Owned product vision and roadmap through close engagement with clients and decarbonisation practitioners, aligned to GHG standards and regulatory requirements."
      ]
    },
    {
      company: "This Is Synthesis",
      companyUrl: "https://www.synthesis.partners/",
      title: "Product Lead",
      dates: "Nov 2021 – Jul 2022",
      overview: "Boutique consumer insights consultancy building analytics products using open data.",
      highlights: [
        "Led a start-up team developing data-science-enabled analytics products for Fortune 500 consumer insights teams.",
        "Doubled engineering velocity in one month by revamping release management.",
        "Set up a continuous user research stream and integrated insights into the product backlog."
      ]
    },
    {
      company: "Mobileum",
      companyUrl: "https://www.mobileum.com",
      title: "Product Lead (Business Solutions)",
      dates: "Jul 2021 – Nov 2021",
      overview: "Telecom analytics provider; role focused on post-acquisition growth of the business solutions suite.",
      highlights: [
        "Owned an offerings suite to improve telco marketing ROI via AI-driven targeting.",
        "Partnered with CXOs to align product strategy with post-acquisition business objectives."
      ]
    },
    {
      company: "Niometrics (acquired by Mobileum)",
      title: "Solutions Manager",
      dates: "Aug 2019 – Jun 2021",
      overview: "Deep packet inspection (DPI) analytics startup originating from A*STAR.",
      examples: [
        {
          label: "User Segmentation / Digital Leads Generator",
          href: "https://www.mobileum.com/products/data-insights-monetization/subscriber-network-data-monetization/user-segmentation-digital-leads-generator"
        },
        {
          label: "Intelligent Subscriber Campaign Triggering",
          href: "https://www.mobileum.com/products/data-insights-monetization/subscriber-network-data-monetization/intelligent-subscriber-campaign-triggering"
        },
              {
          label: "Household Analytics & Actionable Insights",
          href: "https://www.mobileum.com/products/data-insights-monetization/subscriber-network-data-monetization/household-analytics-actionable-insights"
        }],      
      highlights: [
        "Brought to market a proprietary data monetisation solution, reducing customer segmentation lead time from weeks to under 60 seconds and displacing an incumbent at a Tier-1 telco.",
        "Kickstarted a new enterprise product line; delivered a 5G IoT enterprise network analytics solution from 0→1 in three months.",
        "Advised telco clients on using analytics to increase ARPU and campaign effectiveness."
      ]
    },
    {
      company: "Niometrics (acquired by Mobileum)",
      title: "Solutions Analyst",
      dates: "Oct 2018 – Jul 2019",
      overview: "Product/solutions role spanning requirements, delivery, and stakeholder alignment with Tier-1 telcos.",
      examples: [
        {
          label: "Event Analytics (Public Events)",
          href: "https://www.mobileum.com/products/customer-experience-management/customer-experience-management-for-public-events/event-analytics-usage-behavior"
        }
      ],      
      highlights: [
        "Developed MRDs with client partnership teams and collaborated with design, engineering, and QA to deliver robust solutions.",
        "Delivered a real-time network performance monitoring product by driving development and shaping use cases with Tier-1 telco stakeholders."
      ]
    }
  ],

  projects: [
    {
      category: "Web apps",
      items: [
        {
          title: "Hit the Jackpot! (IT5007)",
          grade: "Grade: A",
          href: "https://github.com/foongming/IT5007Project",
          links: [
            { label: "GitHub", href: "https://github.com/foongming/IT5007Project" }
          ],
          description: "Real-time map view of HDB listings with historical transaction trends."
        },
        {
          title: "LightningCAT (CS5224)",
          grade: "Grade: A-",
          href: "/CC-FinalReport.pdf",
          links: [
            { label: "Report", href: "/CC-FinalReport.pdf" }
          ],          
          description: "Map-first ActiveSG-style web app concept with lightweight recommendations."
        }
      ]
    },
    {
      category: "AI / LLM",
      items: [
        {
          title: "Endomondo Dataset Exploration (IT5100F)",
          grade: "Grade: A+",
          href: "https://foongming.github.io/it5100f/IT5100F.html",
          description: "EDA, PCA, and exercise prediction with Random Forest using only the first 60 seconds of activity data.",
          links: [
            { label: "Python Notebook", href: "https://foongming.github.io/it5100f/IT5100F.html" }
          ],
        },
        {
          title: "News Bias Classification (CS5242)",
          grade: "Grade: A-",
          href: "https://github.com/foongming/CS5242Project",
          links: [
            { label: "Python Notebook", href: "https://github.com/foongming/CS5242Project/blob/main/report.ipynb" },
            { label: "Slides", href: "/NN-Presentation.pdf" }
          ],
          description: "Ideological bias classification: transformer vs. classical baselines; evaluation-focused experimentation."
        },
        {
          title: "BERT, Llama and friends tackle SQuADv1.0 (CS4248)",
          grade: "Grade: A-",
          href: "https://github.com/foongming/CS4248_Project",
          description: "Augmenting models to improve EM/F1 with focused experimentation and analysis.",
          links: [
            { label: "Report", href: "/NLP-Report.pdf" },
          ],          
        },
        {
          title: "Capstone Research Project (CP5105)",
          grade: "Grade: A+",
          href: "/CapstoneSlides_LAIFoongMing.pdf",
          links: [
            { label: "Slides", href: "/CapstoneSlides_LAIFoongMing.pdf" }
          ],
          description: "Adapting LLMs for emotional-support interactions in low-resource / colloquial dialect settings and their effects on user perceptions and affect."
        },
        {
          title: "MCAT-How? (Ongoing)",
          href: "#",
          description: "RAG assistant that personalizes MCAT study plans to user constraints and baseline knowledge."
        }
      ]
    }
  ]
};