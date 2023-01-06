import { useState } from "react";

export default function useCardsCount(inititalState = {}) {
  const [cardsCount, setCardCount] = useState(inititalState);
  function getCardCount(id) {
    return cardsCount[id] || 0;
  }

  function addToCard(id, amount = 1) {
    setCardCount({
      ...cardsCount,
      [id]: getCardCount(id) + amount
    });
  }

  return { cardsCount, addToCard, getCardCount };
}
