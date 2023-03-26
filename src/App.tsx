import React from "react";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import InputBar from "./components/InputBar/InputBar";
import Button from "./components/Button/Button";
import Queue from "./components/Queue/Queue";

function App() {
  return (
    <main className={styles["content"]}>
      <Header />
      <InputBar />
      <Button />
      <Queue />
    </main>
  );
}

export default App;
