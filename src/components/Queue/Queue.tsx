import React, { useContext, useState, useEffect, Fragment } from "react";
import styles from "./styles/Queue.module.scss";
import QueueElement from "./QueueElement";
import { AppContext } from "../../store/app-context";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { isMapIterator } from "util/types";

const Queue: React.FC = () => {
  const ctx = useContext(AppContext);

  const queueElements = ctx?.queueElements.map((item, i) => {
      return (
        <AnimatePresence key={`itemPresence${i}`}>
          <QueueElement
            key={`item${i}`}
            title={item.originURL}
            isUploaded={item.isUploaded}
            isUploadedURL={item.isUploadedURL}
            checkIfUploaded={ctx.checkIfUploaded}
          />
        </AnimatePresence>
      );
  });

  return (
    <section className={styles["queue"]}>
      <span className={styles["label"]}>Upload Queue:</span>
      <div className={styles["track"]}>{queueElements}</div>
    </section>
  );
};

export default Queue;
