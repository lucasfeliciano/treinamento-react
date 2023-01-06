import styles from "./Cards.module.css";
import Input from "../../components/Input";
import CardGrid from "../CardGrid";
import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import useSearchCards from "./useSearchCards";

export default function Cards() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const { cards, loading } = useSearchCards(debouncedSearchTerm);

  function handleOnChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className={styles.container}>
      <h3>Cards</h3>
      <Input onChange={handleOnChange} className={styles.input} />
      {loading ? "Loading..." : <CardGrid items={cards} />}
    </div>
  );
}
