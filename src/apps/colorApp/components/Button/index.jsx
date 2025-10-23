import styles from "./index.module.scss";

export const Button = ({ color, colorCode, handleClick }) => {
  const shot = () => {
    handleClick(color);
  };
  let className;

  switch (color) {
    case "red":
      className = styles.redButton;
      break;
    case "blue":
      className = styles.blueButton;
      break;
    case "purple":
      className = styles.purpleButton;
      break;
    case "yellow":
      className = styles.yellowButton;
      break;
    default:
      className = styles.redButton;
      break;
  }

  return (
    // <button onClick={shot} className={`${styles.button} ${className}`}>
    <button onClick={shot} className={styles.button + " " + className}>
      <p>{color}</p>
      <p>{colorCode}</p>
    </button>
  );
};
