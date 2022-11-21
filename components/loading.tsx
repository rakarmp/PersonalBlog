import styles from "./layout.module.css";

export default function loading() {
  return (
    <div className={styles.spinner}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
