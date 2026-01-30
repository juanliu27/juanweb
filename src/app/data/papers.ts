// src/data/papers.ts

export type papers = {
    doi: string
    title: string
    year: number
    authors: string
    keywords: string[]
    notes?: {
      summary?: string
      myNotes?: string[]
      relevance?: string
    }
  }
  
  /**
   * 你只需要维护这一份数据
   * - 一篇论文 = 一个 id
   * - keywords 是「小颗粒度概念」
   * - 同一个 keyword 可以出现在多篇论文里（完全 OK）
   */
  export const papers: papers[] = [
    {
      doi: "10.1145/3442188.3445922",
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
  ]
  