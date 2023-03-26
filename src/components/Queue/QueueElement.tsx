import React from "react";
import styles from "./styles/QueueElement.module.scss";
import { isPropertySignature } from "typescript";
import { limitStr } from "../../utils/helper-functions/limitStr";

const QueueElement: React.FC<{ title: string }> = (props) => {
  return (
    <div className={styles["queue-element"]}>
      <span className={styles["title"]}>{limitStr(props.title, 60)}</span>
    </div>
  );
};

export default QueueElement;
