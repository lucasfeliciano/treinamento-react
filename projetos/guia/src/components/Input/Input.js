import classnames from "classnames";
import styles from "./Input.module.css";

export default function Input({ className, ...props }) {
  const classes = classnames(styles.input, className);

  return <input className={classes} {...props} />;
}
