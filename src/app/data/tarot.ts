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
    // 你可以只先放 5–10 张，完全没问题
  ];
  