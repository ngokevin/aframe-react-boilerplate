import { useEffect, useState } from "react";
import styles from "./Stage.module.css";

function Stage() {
  const f = (a, b) => {
    c = a ** b;
    return c;
  };

  return <div className={styles["stage"]}>{f()}</div>;
}

export default Stage;
