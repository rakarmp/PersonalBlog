import styles from "./layout.module.css";

export default function loading() {
  return (
    <div className={styles.progressPosition}>
      <div className={styles.progress}></div>
    </div>
  );
}
