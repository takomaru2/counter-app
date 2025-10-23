import { Button } from "../Button/index.jsx";
import styles from "./index.module.scss";
import { useState } from "react";
import { colors } from "../utils/colors.js";

export const ColorApp = () => {
  const [borderColor, setBorderColor] = useState("red");
  const handleClick = (clickedColor) => {
    //押したらborderがその色に変わる。新しいクラスつける
    setBorderColor(clickedColor);
  };

  return (
    <div className={`${styles.wrapper} ${styles[borderColor]}`}>
      {colors.map(({ name, code }) => (
        <Button
          key={name}
          color={name}
          colorCode={code}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
