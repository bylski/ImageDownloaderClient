import React, { useContext, useState, useEffect, Fragment } from "react";
import styles from "./styles/Queue.module.scss";
import QueueElement from "./QueueElement";
import { AppContext } from "../../store/app-context";
import { AnimatePresence, LayoutGroup } from "framer-motion";

const Queue: React.FC = () => {
  const ctx = useContext(AppContext);

  const queueElements = ctx?.queueElements.map((item, i) => {
    return (
      <AnimatePresence>
        <QueueElement key={`item${i}`} title={item.title} />
      </AnimatePresence>
    );
  });

  return (
    <section className={styles["queue"]}>
      <span className={styles["label"]}>Upload Queue:</span>
      <div className={styles["track"]}>
        <AnimatePresence>
          {ctx?.queueElements.length! < 3 && <QueueElement title={"das"} />}
        </AnimatePresence>

        {queueElements}
      </div>
    </section>
  );
};

export default Queue;
