// src/app/data/tarot.ts

export type TarotCard = {
    id: number;
    name: string;
    image: string;
    keywords: string[];
  };
  
  export const tarotCards: TarotCard[] = [
    {
      id: 0,
      name: "The Fool",
      image: "/tarot/cards/00_Fool.jpg",
      keywords: ["beginnings", "uncertainty", "leap"],
    },
    {
      id: 1,
      name: "The Magician",
      image: "/tarot/cards/01_Magician.jpg",
      keywords: ["agency", "making", "power"],
    },
    {
      id: 2,
      name: "The High Priestess",
      image: "/tarot/cards/02_High_Priestess.jpg",
      keywords: ["intuition", "silence", "hidden knowledge", "threshold"]
    },
    {
      id: 3,
      name: "The Empress",
      image: "/tarot/cards/03_Empress.jpg",
      keywords: ["care", "growth", "abundance", "nurture"]
    },
    {
      id: 4,
      name: "The Emperor",
      image: "/tarot/cards/04_Emperor.jpg",
      keywords: ["structure", "authority", "order", "control"]
    },
    {
      id: 5,
      name: "The Hierophant",
      image: "/tarot/cards/05_Hierophant.jpg",
      keywords: ["tradition", "institution", "belief", "teaching"]
    },
    {
      id: 6,
      name: "The Lovers",
      image: "/tarot/cards/06_Lovers.jpg",
      keywords: ["choice", "relation", "alignment", "commitment"]
    },
    {
      id: 7,
      name: "The Chariot",
      image: "/tarot/cards/07_Chariot.jpg",
      keywords: ["direction", "momentum", "will", "movement"]
    },
    {
      id: 8,
      name: "Strength",
      image: "/tarot/cards/08-Strength.jpg",
      keywords: ["gentle power", "patience", "inner force", "restraint"]
    },
    {
      id: 9,
      name: "The Hermit",
      image: "/tarot/cards/09_Hermit.jpg",
      keywords: ["withdrawal", "reflection", "solitude", "search"]
    },
    {
      id: 10,
      name: "Wheel of Fortune",
      image: "/tarot/cards/10_Wheel-of-Fortune.jpg",
      keywords: ["change", "cycle", "chance", "instability"]
    },
    {
      id: 11,
      name: "Justice",
      image: "/tarot/cards/11_Justice.jpg",
      keywords: ["fairness", "accountability", "balance", "truth"]
    },
    {
      id: 12,
      name: "The Hanged Man",
      image: "/tarot/cards/12_Hanged_Man.jpg",
      keywords: ["pause", "reversal", "letting go", "reframing"]
    },
    {
      id: 13,
      name: "Death",
      image: "/tarot/cards/13_Death.jpg",
      keywords: ["ending", "transition", "release", "irreversibility"]
    },
    {
      id: 14,
      name: "Temperance",
      image: "/tarot/cards/14_Temperance.jpg",
      keywords: ["balance", "integration", "moderation", "flow"]
    },
    {
      id: 15,
      name: "The Devil",
      image: "/tarot/cards/15_Devil.jpg",
      keywords: ["attachment", "constraint", "desire", "illusion"]
    },
    {
      id: 16,
      name: "The Tower",
      image: "/tarot/cards/16_Tower.jpg",
      keywords: ["collapse", "shock", "disruption", "exposure"]
    },
    {
      id: 17,
      name: "The Star",
      image: "/tarot/cards/17_Star.jpg",
      keywords: ["hope", "repair", "quiet faith", "continuance"]
    },
    {
      id: 18,
      name: "The Moon",
      image: "/tarot/cards/18_Moon.jpg",
      keywords: ["ambiguity", "fear", "dream", "distortion"]
    },
    {
      id: 19,
      name: "The Sun",
      image: "/tarot/cards/19_Sun.jpg",
      keywords: ["clarity", "warmth", "visibility", "affirmation"]
    },
    {
      id: 20,
      name: "Judgement",
      image: "/tarot/cards/20_Judgement.jpg",
      keywords: ["reckoning", "awakening", "response", "renewal"]
    },
    {
      id: 21,
      name: "The World",
      image: "/tarot/cards/21_World.jpg",
      keywords: ["completion", "wholeness", "closure", "return"]
    }
  ];
  