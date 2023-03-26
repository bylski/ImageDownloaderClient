import React from "react";
import styles from "./styles/InputBar.module.scss";

const InputBar: React.FC = () => {
  return (
    <section className={styles["container"]}>
      <input placeholder={"Pass here the URL of the image you want to save..."} className={styles["input-bar"]} type="text"></input>
    </section>
  );
};

export default InputBar;
