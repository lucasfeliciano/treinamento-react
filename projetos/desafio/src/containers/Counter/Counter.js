import styles from "./Counter.module.css";
import Button from "../../components/Button";

import { useTotalContext } from "../../contexts/TotalContext";
import useCounter from "../../hooks/useCounter";

export default function Counter() {
  const { count, add } = useCounter();
  const { add: addContext } = useTotalContext();

  function addFive() {
    add(5);
    addContext(5);
  }

  function addOne() {
    add();
    addContext();
  }

  return (
    <div className={styles.container}>
      <div className={styles.count}>Count: {count}</div>
      <Button onClick={addOne}>+ 1</Button>
      <Button onClick={addFive}>+ 5</Button>
    </div>
  );
}
