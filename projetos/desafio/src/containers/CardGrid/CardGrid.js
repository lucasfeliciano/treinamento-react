import Counter from "../Counter";

import styles from "./CardGrid.module.css";

export default function CardGrid({ items = [] }) {
  if (items.length === 0) return "No items...";

  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <div key={item.id}>
          <img
            alt={item.name}
            src={
              !item.image_uris
                ? item.card_faces[0].image_uris.small
                : item.image_uris.small
            }
          />
          <Counter />
        </div>
      ))}
    </div>
  );
}
