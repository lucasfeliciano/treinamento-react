import styles from "./Counter.module.css";

export default function Counter({ children, count }) {
  return (
    <div className={styles.container}>
      <div className={styles.count}>Count: {count}</div>
      {children}
    </div>
  );
}
