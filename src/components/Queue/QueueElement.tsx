import React, { useState } from "react";
import styles from "./styles/QueueElement.module.scss";
import { limitStr } from "../../utils/helper-functions/limitStr";
import { motion, AnimatePresence } from "framer-motion";
import { createTextChangeRange } from "typescript";

const QueueElement: React.FC<{
  title: string;
  isUploadedURL: string;
  isUploaded: boolean;
  checkIfUploaded?: (
    isUploadedURL: string
  ) => Promise<{ isImgUploaded: boolean }>;
}> = (props) => {
  const [isImageUploaded, setIsImageUploaded] = useState(props.isUploaded);

  if (props.checkIfUploaded && props.checkIfUploaded !== undefined && !isImageUploaded) {
    const isUploadedCheck = setInterval(() => {
      props.checkIfUploaded!(props.isUploadedURL).then((res) => {
        if (res.isImgUploaded) {
          clearInterval(isUploadedCheck);
          setIsImageUploaded(true);
        }
      });
    }, 3000);
  }

  return (
    <motion.div
      transition={{ type: "spring", damping: 100, stiffness: 800 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1 }}
      className={styles["queue-element"]}
    >
      <span className={styles["title"]}>{limitStr(props.title, 60)}</span>
      {!isImageUploaded ? (
        <div className={styles["loading-circle"]}></div>
      ) : (
        <span className={styles["uploaded-text"]}>Uploaded</span>
      )}
    </motion.div>
  );
};

export default QueueElement;
