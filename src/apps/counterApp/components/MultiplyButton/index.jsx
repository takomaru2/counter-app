import styles from "./index.module.scss";

export const MultiplyButton = ({ count, setCount, num }) => {
  const handleClickMultiply = () => {
    setCount(count * num);
  };

  return (
    <button onClick={handleClickMultiply} className={styles.button}>
      x{num}
    </button>
  );
};
