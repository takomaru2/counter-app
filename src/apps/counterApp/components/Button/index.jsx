import styles from "./index.module.scss";

export const Button = ({ num, handleClick, operator }) => {
  let className;

  if (operator === "+") {
    className = styles.addButton;
  }
  if (operator === "-") {
    className = styles.minusButton;
  }
  if (operator === "x") {
    className = styles.multiplyButton;
  }

  return (
    <button onClick={handleClick} className={className}>
      {operator}
      {num}
    </button>
  );
};
