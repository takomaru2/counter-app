import styles from "./CounterApp.module.scss";
import { useState } from "react";

export const CounterApp = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <div className={styles.counter}>{count}</div>
      <button onClick={handleClick} className={styles.button}>
        +1
      </button>
    </div>
  );
};
