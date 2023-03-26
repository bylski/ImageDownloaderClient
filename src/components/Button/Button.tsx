import React from "react";
import styles from "./styles/Button.module.scss";

const Button: React.FC = () => {
  return (
    <div className={styles["container"]}>
      <button className={styles["button"]}>DOWNLOAD</button>
    </div>
  );
};

export default Button;
