import React from "react";
import styles from "./styles/Image.module.scss";
import { filterProps } from "framer-motion";

const Image: React.FC<{originUrl: string, storedUrl: string, dateAdded: string, dateUploaded: string }> = (props) => {
  return (
    <div className={styles["container"]}>
      <img
        src={props.storedUrl}
        className={styles["image"]}
      ></img>
        <span>Date Added: {props.dateAdded}</span>
        <span>Date Uploaded: {props.dateUploaded}</span>
    </div>
  );
};

export default Image;

