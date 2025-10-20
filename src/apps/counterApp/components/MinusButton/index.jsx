import styles from "./index.module.scss";

export const MinusButton = ({ count, setCount, num }) => {
  const handleClickMinus = () => {
    setCount(count - num);
  };

  return (
    <button onClick={handleClickMinus} className={styles.button}>
      -{num}
    </button>
  );
};
