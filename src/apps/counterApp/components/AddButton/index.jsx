import styles from "./index.module.scss";

export const AddButton = ({ count, setCount, num }) => {
  const handleClickAdd = () => {
    setCount(count + num);
  };

  return (
    <button onClick={handleClickAdd} className={styles.button}>
      +{num}
    </button>
  );
};
