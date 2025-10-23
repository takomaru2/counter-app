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
    case "yellow":
      className = styles.yellowButton;
      break;
    case "purple":
      className = styles.purpleButton;
      break;
    case "green":
      className = styles.greenButton;
      break;
    case "orange":
      className = styles.orangeButton;
      break;
    case "pink":
      className = styles.pinkButton;
      break;
    case "gray":
      className = styles.grayButton;
      break;
    case "cyan":
      className = styles.cyanButton;
      break;
    default:
      className = styles.redButton;
      break;
  }
  return (
    <button onClick={shot} className={`${styles.button} ${className}`}>
      <p>{color}</p>
      <p>{colorCode}</p>
    </button>
  );
};
