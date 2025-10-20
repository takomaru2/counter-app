import styles from "./index.module.scss";
import { useState } from "react";

export const CounterApp = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClick1 = () => {
    setCount(count - 1);
  };
  const handleClick2 = () => {
    setCount(count * 2);
  };

  return (
    <div>
      <div className={styles.counter}>{count}</div>
      <button onClick={handleClick} className={styles.button}>
        +1
      </button>
      <button onClick={handleClick} className={styles.button}>
        +2
      </button>
      <button onClick={handleClick1} className={styles.button}>
        -1
      </button>
      <button onClick={handleClick2} className={styles.button}>
        x2
      </button>
    </div>
  );
};
