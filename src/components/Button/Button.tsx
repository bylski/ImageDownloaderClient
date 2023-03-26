import React, { useContext } from "react";
import styles from "./styles/Button.module.scss";
import { AppContext } from "../../store/app-context";

const Button: React.FC = () => {
  const ctx = useContext(AppContext);

  const addToQueueHandler = () => {
    ctx?.onAddToQueue({
      title:
        "https://res.cloudinary.com/doc1zylfo/image/upload/v1679613004/pexels-christian-heitz-842711_oqfura.jpg",
    });
  };

  return (
    <div className={styles["container"]}>
      <button onClick={addToQueueHandler} className={styles["button"]}>
        DOWNLOAD
      </button>
    </div>
  );
};

export default Button;
