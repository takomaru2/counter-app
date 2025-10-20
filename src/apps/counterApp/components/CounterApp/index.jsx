import styles from "./index.module.scss";
import { useState } from "react";
import { AddButton } from "../AddButton/index.jsx";
import { MinusButton } from "../MinusButton/index.jsx";

export const CounterApp = () => {
  const [count, setCount] = useState(0);

  const handleClick2 = () => {
    setCount(count * 2);
  };

  return (
    <div>
      <div className={styles.counter}>{count}</div>

      <AddButton num={1} count={count} setCount={setCount} />
      <AddButton num={2} count={count} setCount={setCount} />
      <AddButton num={3} count={count} setCount={setCount} />

      <MinusButton num={1} count={count} setCount={setCount} />
      <MinusButton num={2} count={count} setCount={setCount} />
      <MinusButton num={3} count={count} setCount={setCount} />

      <button onClick={handleClick2} className={styles.button}>
        x2
      </button>
    </div>
  );
};
