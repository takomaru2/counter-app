import { Button } from "../Button/index.jsx";
import styles from "./index.module.scss";
import { useState } from "react";

export const ColorApp = () => {
  const [borderColor, setBorderColor] = useState("red");
  const handleClick = (clickedColor) => {
    //押したらborderがその色に変わる。新しいクラスつける
    // className = styles.border;
    setBorderColor(clickedColor);
  };
  const colors = [
    { name: "red", code: "#E74C3C" },
    { name: "blue", code: "#3498DB" },
    { name: "yellow", code: "#F1C40F" },
    { name: "purple", code: "#9B59B6" },
    { name: "green", code: "#2ECC71" },
    { name: "orange", code: "#E67E22" },
    { name: "pink", code: "#FF69B4" },
    { name: "gray", code: "#95A5A6" },
    { name: "cyan", code: "#1ABC9C" },
  ];

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

      {/*<Button color={"red"} colorCode={"#FF5733"} handleClick={handleClick} />*/}
      {/*<Button color={"blue"} colorCode={"#3357FF"} handleClick={handleClick} />*/}
      {/*<Button*/}
      {/*  color={"purple"}*/}
      {/*  colorCode={"#8e44ad"}*/}
      {/*  handleClick={handleClick}*/}
      {/*/>*/}
      {/*<Button*/}
      {/*  color={"yellow"}*/}
      {/*  colorCode={"#F1C40F"}*/}
      {/*  handleClick={handleClick}*/}
      {/*/>*/}
    </div>
  );
};
