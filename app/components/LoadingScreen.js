import styles from "./LoadingScreen.module.css";

export default function LoadingScreen({loaded}) {
  return (
    <div className={`${styles.loadingOverlay} ${loaded ? styles.completedLoading : ""}`}>
      <div className={styles.loader}></div>
    </div>
  );
}