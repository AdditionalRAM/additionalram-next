import React from "react";
import styles from "./AccessibleHeading.module.css";

export default function AccessibleHeading({ text, level }) {
  switch (level) {
    case 1:
      return (<h1 className={styles.srOnly}>{text}</h1>);
    case 2:
      return (<h2 className={styles.srOnly}>{text}</h2>);
    case 3:
      return (<h3 className={styles.srOnly}>{text}</h3>);
    default:
      return (<h1 className={styles.srOnly}>{text}</h1>);
  }
}