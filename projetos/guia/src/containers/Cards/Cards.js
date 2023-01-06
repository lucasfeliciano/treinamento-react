import { useState } from "react";
import { useTotalContext } from "../../contexts/TotalContext";
import Button from "../../components/Button";
import CardGrid from "../../components/CardGrid";
import Counter from "../../components/Counter";
import Input from "../../components/Input";
import styles from "./Cards.module.css";
import useDebounce from "../../hooks/useDebounce";
import useSearchCards from "./useSearchCards";
import useCardsCount from "./useCardCount";
import Card from "./Card";

export default function Cards() {
  const { add: addTotal } = useTotalContext();
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCard, getCardCount } = useCardsCount();

  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const { cards, loading } = useSearchCards(debouncedSearchTerm);

  function handleOnChange(event) {
    setSearchTerm(event.target.value);
  }

  function addWithTotal(id, amount = 1) {
    addToCard(id, amount);
    addTotal(amount);
  }

  return (
    <div className={styles.container}>
      <h3>Cards</h3>
      <Input onChange={handleOnChange} className={styles.input} />
      {loading ? (
        "Loading..."
      ) : (
        <CardGrid
          items={cards}
          renderCard={(card) => {
            return (
              <Card key={card.id} card={card}>
                <Counter count={getCardCount(card.id)}>
                  <Button onClick={() => addWithTotal(card.id)}>+ 1</Button>
                  <Button onClick={() => addWithTotal(card.id, 5)}>+ 5</Button>
                </Counter>
              </Card>
            );
          }}
        />
      )}
    </div>
  );
}
