import styles from "./index.module.scss";

export const Button = ({ num, handleClick, operator }) => {
  let className;

  //operartorが+か-かx以外だったら
  const isTarget = operator === "+" || operator === "-" || operator === "x";
  if (!isTarget) {
    // if (operator !== "+" && operator !== "-" && operator !== "x") {
    className = styles.add;
  }
  if (operator === "+") {
    className = styles.add;
  }
  if (operator === "-") {
    className = styles.minus;
  }
  if (operator === "x") {
    className = styles.multiply;
  }

  return (
    <button onClick={handleClick} className={`${styles.button} ${className}`}>
      {operator}
      {num}
    </button>
  );
};
