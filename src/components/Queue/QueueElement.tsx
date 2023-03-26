import React from "react";
import styles from "./styles/QueueElement.module.scss";
import { limitStr } from "../../utils/helper-functions/limitStr";
import { motion, AnimatePresence } from "framer-motion";

const QueueElement: React.FC<{ title: string }> = (props) => {
  return (
      <motion.div
        transition={{ type: "spring", damping: 100, stiffness: 800 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1 }}
        className={styles["queue-element"]}
        
      >
        <span className={styles["title"]}>{limitStr(props.title, 60)}</span>
        <div className={styles["loading-circle"]}></div>
      </motion.div>
  );
};

export default QueueElement;
