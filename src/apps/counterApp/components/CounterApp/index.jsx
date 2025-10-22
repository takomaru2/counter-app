import styles from "./index.module.scss";
import { useState } from "react";
import { AddButton } from "../AddButton/index.jsx";
import { MinusButton } from "../MinusButton/index.jsx";
import { MultiplyButton } from "../MultiplyButton/index.jsx";
import { generateNumbers } from "../../utils/generateNumbers.js";
import { ButtonGroup } from "../ButtonGroup/index.jsx";

export const CounterApp = () => {
  const [count, setCount] = useState(0);

  const numbers = generateNumbers();

  return (
    <div>
      <div className={styles.buttonWrapper}>
        <div className={styles.buttonFlex}>
          <ButtonGroup
            ButtonComponent={AddButton}
            count={count}
            setCount={setCount}
            numbers={numbers}
          />
          <ButtonGroup
            ButtonComponent={MinusButton}
            count={count}
            setCount={setCount}
            numbers={numbers}
          />
          <ButtonGroup
            ButtonComponent={MultiplyButton}
            count={count}
            setCount={setCount}
            numbers={numbers}
          />
        </div>
      </div>
      <div className={styles.boardWrapper}>
        <img
          src="/counterAppImage/bsk.JPG"
          alt="ビスケと言う女性の画像"
          className={styles.board}
        />
        <div className={styles.counter}>{count}</div>
      </div>
    </div>
  );
};
