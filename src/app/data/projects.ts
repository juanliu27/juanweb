export type Project = {
    slug: string;
    title: string;
    subtitle: string;
    timeframe: string;
    category: string[];
    role: string;
    tags: string[];
    description: string;
    link: string;
  };
  
  export const projects: Project[] = [
    {
      slug: "privacy-anxiety-platform-migration",
      title: "Privacy Anxiety and Platform Migration on Social Media",
      subtitle:
        "How platform governance changes activate and amplify privacy anxiety across online communities",
      timeframe: "March 2025 – January 2026",
      category: ["Research", "AI Ethics", "Social Media"],
      role: "Researcher & System Designer",
      tags: [
        "Social Media",
        "AI Ethics",
        "Platform Governance",
        "Privacy Anxiety",
        "Mixed Methods",
        "Policy Analysis",
        "Topic Modeling",
        'Policy'
      ],
      description: 'This thesis examines how a Terms of Service update on X enabling default AI training on user content activated privacy anxiety and reshaped user behavior. Privacy anxiety is framed as a structural outcome of uncertainty, power asymmetries, and loss of control over data use, especially for content creators. The study shows that anxiety first emerged within creator communities and then diffused across user groups through inter-community interaction, forming a platform-wide affective atmosphere. Algorithmic systems did not initiate this process but selectively intensified it by increasing the visibility of anxiety-intense privacy-related content. As anxiety escalated, community cohesion weakened, engagement declined, and large-scale digital migration followed, mostly creators. Overall, the findings highlight how AI-driven platform governance can activate and scale privacy anxiety, leading to trust breakdown and user migration.',
      link: 'github.link'
    },
    {
      slug: "aiei",
      title: "AI Ethics Index",
      subtitle:
        "An Ethics oriented large language model benchmark",
      timeframe: "July 2025 – January 2026",
      category: ["Research", "LLM", "Benchmark"],
      role: "Researcher Assistant",
      tags: [
        "Large Language Model",
        "AI Ethics",
        "Mixed Methods",
        'Benchmarking',
      ],
      description: `AI-EI (AI Ethics Index) is a public, evidence-based benchmarking framework designed 
      to evaluate the ethical quality and governance performance of AI systems. The project aims to provide a structured and transparent assessment of AI practices across technical, social, and regulatory dimensions.

To ensure broad coverage, AI-EI defines nine canonical dimensions, supplemented by several composite dimensions. Together, these dimensions capture a wide range of ethical concerns relevant to real-world AI deployment.<br />

Each dimension is organized into a four-level hierarchical structure. L1 represents the overarching ethical dimension; L2 specifies secondary sub-dimensions; L3 provides conceptual explanations; and L4 consists of detailed, measurable indicators. <br />

At the L4 level, final scores are derived using multiple evaluation methods grounded in regulatory context and real-world case studies. These methods include LLM prompt-based testing, LLM-assisted document analysis, and expert-informed scoring or background checks, enabling a robust and multi-modal ethical assessment of AI systems.`,
      link: 'github.link'
    },
    {
      "slug": "nlp-multimodal-bio-experiment-agent",
      "title": "NLP-centric MultiModal Biological Experiment Agent",
      "subtitle": "Designing an intelligent agent for protocol retrieval, generation, and question answering in biological experiments",
      "timeframe": "Sep 2023 – Mar 2024",
      "category": ["Research", "Natural Language Processing", "MultiModal Systems"],
      "role": "Research Assistant",
      "tags": [
        'Large Language Model',
        "MultiModal",
        "LangChain",
        "KBQA",
        "Information Retrieval"
      ],
      "description": "This project focuses on developing an NLP-centric multimodal agent to support biological experiment design and knowledge access. Over 20,000 experimental protocols were crawled from journal websites and analyzed through exploratory data analysis to understand protocol structure and distribution. Based on these insights, a protocol generation agent was customized using the LangChain framework with few-shot prompt design. In addition, a knowledge-based question answering (KBQA) system was built using markdown-formatted protocol data, Faiss indexing, and keyword embeddings to improve retrieval accuracy and recall. The system demonstrates how large language models and retrieval-augmented generation can assist scientific experimentation and workflow automation.",
      "link": "github.link"
    },    
    {
      "slug": "bias-detection-social-media",
      "title": "Bias Detection in Social Media Content",
      "subtitle": "End-to-end bias detection and real-time analytics for large-scale social media data",
      "timeframe": "Sep 2024 – May 2025",
      "category": ["Research", "Machine Learning", "Social Media"],
      "role": "Researcher & Machine Learning Engineer",
      "tags": [
        "Bias Detection",
        "Social Media",
        'Large Language Model',
        "Azure",
        "Data Streaming",
        "Data Engineering"
      ],
      "description": "This project investigates gender and racial bias in social media content through an end-to-end machine learning and data engineering pipeline. An Azure-based medallion architecture was deployed using Azure Resource Manager to support both batch ingestion (SBIC dataset) and hourly streaming ingestion from the Bluesky API. A BERT-based classifier was trained on batch data, achieving an average accuracy of 88.62%, and deployed via Azure Functions and Azure ML endpoints to enable real-time inference on streaming content. To support analysis and interpretation, interactive PowerBI dashboards were developed for both batch and streaming data, featuring six-hour refresh cycles, cross-report linking, and Key Influencer visuals for near real-time demographic and bias insights.",
      "link": "github.link"
    },
    {
      "slug": "virtual-anchor-profitability-system-dynamics",
      "title": "Analysis of Virtual Anchor Profitability Based on System Dynamics",
      "subtitle": "Modeling monetization mechanisms and revenue dynamics in the virtual streaming economy",
      "timeframe": "Nov 2022 – May 2023",
      "category": ["Research", "Computational Social Science", "Digital Economy"],
      "role": "Researcher & Data Analyst",
      "tags": [
        "System Dynamics",
        "Digital Labor",
        'NLP', 'Vensim',
      ],
      "description": "This project analyzes the profitability and monetization dynamics of virtual anchors (VTubers) using a system dynamics approach. A dataset of 184,622 observations covering live broadcasts and revenue over a three-year period was scraped using BeautifulSoup. Monetization-related variables were examined through OLS regression, with statistically insignificant variables (p-value > 0.05) filtered out to identify key revenue drivers. Based on the empirical results, a dynamic profit estimation system was constructed in Vensim to simulate revenue trajectories and feedback loops within the virtual streaming ecosystem. The model achieved estimation errors below 1% and provided actionable insights on optimizing streaming strategies and performance.",
      "link": "github.link"
    },
    {
      "slug": "genai-interactive-topics",
      "title": "GenAI Interactive Topics Explorer",
      "subtitle": "Interactive topic modeling and exploration for generative AI–related discourse",
      "timeframe": "2024",
      "category": ["Research", "Generative AI",''],
      "role": "Contributor & NLP Developer",
      "tags": [
        "Topic Modeling",
        'Large Language Model',
        "Interactive Visualization",
        "NLP",
        'Policy'
      ],
      "description": "This project develops an interactive system for exploring topics within generative AI–related textual data. The repository focuses on transforming static topic modeling results into an interactive analytical interface, enabling users to dynamically inspect topic distributions, representative keywords, and semantic shifts across documents. The work supports exploratory analysis of public and academic discourse surrounding generative AI, bridging computational topic modeling with human-centered interpretability. My contribution involved participating in the design and implementation of the topic analysis pipeline and the interactive exploration components.",
      "link": "https://github.com/ZhengyangShan/genai-interactive-topics"
    }
    ,
  
    // 后面你其他 project 继续加
  ];
  