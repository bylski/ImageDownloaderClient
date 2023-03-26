import React, { useContext } from "react";
import styles from "./styles/Button.module.scss";
import { AppContext } from "../../store/app-context";

const Button: React.FC = () => {
  const ctx = useContext(AppContext);

  const addToQueueHandler = () => {
    const sendImageForUpload = async () => {
      const res = await fetch("http://localhost:8000/images", {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageUrl:
            "https://res.cloudinary.com/doc1zylfo/image/upload/v1679613004/pexels-christian-heitz-842711_oqfura.jpg",
        }),
      });
      const data = await res.json();

      return data;
    };

    sendImageForUpload().then((res) => {
      ctx?.onAddToQueue({
        originURL:
          "https://res.cloudinary.com/doc1zylfo/image/upload/v1679613004/pexels-christian-heitz-842711_oqfura.jpg",
        isUploadedURL: res.data,
        isUploaded: false,
      });
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
