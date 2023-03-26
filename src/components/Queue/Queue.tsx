import React, { useContext, useState, useEffect } from "react";
import styles from "./styles/Queue.module.scss";
import QueueElement from "./QueueElement";
import { AppContext } from "../../store/app-context";

const Queue: React.FC = () => {
  const ctx = useContext(AppContext);
 

  const queueElements = ctx?.queueElements.map((item) => {
    return <QueueElement title={item.title} />;
  });


  return (
    <section className={styles["queue"]}>
      <span className={styles["label"]}>Upload Queue:</span>
      <div className={styles["track"]}>{queueElements}</div>
    </section>
  );
};

export default Queue;
