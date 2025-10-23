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

  return (
    <div className={`${styles.wrapper} ${styles[borderColor]}`}>
      <Button color={"red"} colorCode={"#FF5733"} handleClick={handleClick} />
      <Button color={"blue"} colorCode={"#3357FF"} handleClick={handleClick} />
      <Button
        color={"purple"}
        colorCode={"#8e44ad"}
        handleClick={handleClick}
      />
      <Button
        color={"yellow"}
        colorCode={"#F1C40F"}
        handleClick={handleClick}
      />
    </div>
  );
};

//  const colors = [
//     { name: "red", code: "#FF5733" },
//     { name: "blue", code: "#3357FF" },
//     { name: "yellow", code: "#3357FF" },
//     { name: "green", code: "#3357FF" },
//     { name: "purple", code: "#8E44AD" },
//     { name: "orange", code: "#E67E22" },
//     { name: "pink", code: "#F1948A" },
//     { name: "gray", code: "#7F8C8D" },
//     { name: "cyan", code: "#17A589" },
//   ];

//   {/*{colors.map(({ name, code }) => (*/}
//       {/*  <Button*/}
//       {/*    key={name}*/}
//       {/*    color={name}*/}
//       {/*    colorCode={code}*/}
//       {/*    handleClick={handleClick}*/}
//       {/*  />*/}
//       {/*))}*/}
