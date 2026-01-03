"use client";

import { useState } from "react";
import { tarotCards } from "@/app/data/tarot";

export default function TarotDraw() {
  const [card, setCard] = useState<(typeof tarotCards)[0] | null>(null);

  const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    setCard(tarotCards[randomIndex]);
  };

  return (
    <div className="flex flex-col gap-3">
      {/* 点击的就是这张图 */}
      <img
        src={card ? card.image : "/tarot/tarot-long.JPG"}
        alt={card ? card.name : "Tarot visual"}
        onClick={drawCard}
        className="w-full cursor-pointer object-cover"
      />

      {card && (
        <div className="text-xs text-neutral-600">
          <div className="font-medium">{card.name}</div>
          <div className="opacity-70">
            {card.keywords.join(" · ")}
          </div>
        </div>
      )}
    </div>
  );
}
