import styles from "./CardGrid.module.css";

export default function CardGrid({ items = [], renderCard }) {
  if (items.length === 0) return "No items...";

  return (
    <div className={styles.grid}>{items.map((item) => renderCard(item))}</div>
  );
}
