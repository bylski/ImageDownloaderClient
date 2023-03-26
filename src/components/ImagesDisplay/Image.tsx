import React from "react";
import styles from "./styles/Image.module.scss";
import { filterProps } from "framer-motion";

const Image: React.FC<{
  originUrl: string;
  storedUrl: string;
  dateAdded: string;
  dateUploaded: string;
}> = (props) => {
  return (
    <div className={styles["container"]}>
      <img src={props.storedUrl} className={styles["image"]}></img>
      <div className={styles["image__info"]}>
        <span>Date Added: {props.dateAdded}</span>
        <span>Date Uploaded: {props.dateUploaded}</span>
        <a href={props.originUrl}>Origin URL link</a>
        <a href={props.storedUrl}>Stored URL link</a>
      </div>
    </div>
  );
};

export default Image;
