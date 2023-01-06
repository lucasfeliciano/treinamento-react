import { useTotalContext } from "../../contexts/TotalContext";

import styles from "./Total.module.css";

export default function Total() {
  const { total } = useTotalContext();

  return (
    <div className={styles.container}>
      <h3>Total: {total}</h3>
    </div>
  );
}
