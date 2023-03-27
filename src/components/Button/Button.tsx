import React, { useContext } from "react";
import styles from "./styles/Button.module.scss";
import { AppContext } from "../../store/app-context";

const Button: React.FC = () => {

  return (
    <div className={styles["container"]}>
      <button className={styles["button"]}>
        DOWNLOAD
      </button>
    </div>
  );
};

export default Button;
