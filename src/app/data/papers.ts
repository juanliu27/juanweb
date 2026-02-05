// src/data/papers.ts

export type papers = {
    doi: string
    link: string
    title: string
    year: number
    authors: string
    keywords: string[]
    notes?: {
      summary?: string
      myNotes?: string[]
      initiative?: string[]
    }
  }
  
  export const papers: papers[] = [
    {
      doi: "10.1145/3442188.3445922",
      link: 'https://dl.acm.org/doi/10.1145/3442188.3445922',
      title: "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? 🦜",
      year: 2021,
      authors: 'Bender, Emily M. and Gebru, Timnit and McMillan-Major, Angelina and Shmitchell, Shmargaret',
      keywords: [
        "Large Language Model",
        "NLP",
        "Environmental Cost",
        "Hegemonic Data",
      ],
      notes:{
        summary:`Possible risks associated with Large Language Model and what paths are available for mitigating those risks. 
        Data risk includes diversity, omitted while collecting, encoding bias.
        Recommendations including weighing the environmental and financial costs first, investing resources into curating and carefully documenting datasets. `,
        myNotes:[
          'One of the earliest and most influential critiques of large language models. Many still look up-to-date. Unfortunately, 5 years later, the problems have never been solved.',
          'Most LLM company still refuse to disclose their environmental impact and usage of energy resource, even including Gemini, in their latest documentation of model cards and safety reports. Astonishing data discovered:',
          '*While the average human is responsible for an estimated 5t per year, a Transformer (big) model [136] with neural architecture search and estimated that the training procedure emitted 284t of CO2. *',
          'Interesting but quite ideal viewpoints to enhance the curation and documentation by LLM company themselves. Even newly release model nowadays are not equipped with precise and clear instructions and model cards. Probably not going to work in a fast-competing AI era for accuracy and latency.'
        ]
      }
    },
    {
      doi: "2503.21679",
      link: 'https://arxiv.org/abs/2503.21679',
      title: "JiraiBench: A Bilingual Benchmark for Evaluating Large Language Models' Detection of Human Self-Destructive Behavior Content in Jirai Community",
      year: 2026,
      authors: 'Yunze Xiao, Tingyu He, Lionel Z. Wang, Yiming Ma, Xingyu Song, Xiaohang Xu, Mona Diab, Irene Li, Ka Chung Ng',
      keywords: [
        "Behavior Detection",
        "LLM Benchmark",
        "Social Media",
        'Multilingual Task'
      ],
      notes:{
        summary:`JiraiBench, the first bilingual benchmark for evaluating large language models’ effectiveness in detecting self-destructive content across Chinese and Japanese social media communities. Experimental evaluations across four state-of-the-art models reveal significant performance 
        variations based on instructional language. It highlight the need for
 culturally informed approaches to multilingual content moderation and
 provide empirical evidence for the importance of cultural context in developing more effective detection systems for vulnerable online communities.`,
        myNotes:[
          '**Data Annotation, Accuracy Testing, 文化溯源解释cross-cultural transfer patterns**',
          'Example of identifying self-harm content on social media and capability of improvable detection mechanism',
         `Methodology: Interesting to distinguish first-person and third-party expressions; 
         Inter-annotator reliability: both pairwise (Cohen’s Kappa) and overall (Fleiss’ Kappa) agreement metrics;
         Baseline: zero-shot (pre-knowledge) and few-shot (few example) learning`,
         'Optimal instruction language may not be the target dataset language, but rather one that activates relevant cultural schema for the specific detection task in question.',
         '*?Lack of Inner Detials why Japanese outperform English? Japanese instruction prompts outperform Chinese prompts when processing Chinese content. -- Latent embeddings in middle processing layers already encode appropriate concepts but consistently assign higher probability to English tokens than to target language equiv- alents—even when prompted in non-English languages.*'
        ]
      }
    },
  ]
  