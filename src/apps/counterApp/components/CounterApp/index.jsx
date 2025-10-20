import styles from "./index.module.scss";
import { useState } from "react";
import { AddButton } from "../AddButton/index.jsx";
import { MinusButton } from "../MinusButton/index.jsx";
import { MultiplyButton } from "../MultiplyButton/index.jsx";

export const CounterApp = () => {
  const [count, setCount] = useState(0);

  const numbers = [];
  for (let i = 0; i < 10; i++) {
    numbers.push(i + 1);
  }

  const addButtons = numbers.map((num) => (
    <AddButton num={num} count={count} setCount={setCount} />
  ));

  const minusButtons = numbers.map((num) => (
    <MinusButton num={num} count={count} setCount={setCount} />
  ));

  const multiplyButtons = numbers.map((num) => (
    <MultiplyButton num={num} count={count} setCount={setCount} />
  ));
  return (
    <div>
      <div className={styles.counter}>{count}</div>
      {addButtons}
      {minusButtons}
      {multiplyButtons}
    </div>
  );
};
