import React from "react";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import InputBar from "./components/InputBar/InputBar";
import Button from "./components/Button/Button";
import Queue from "./components/Queue/Queue";
import AppProvider from "./store/app-provider";
import ImagesDisplay from "./components/ImagesDisplay/ImagesDisplay";

function App() {
  return (
    <AppProvider>
      <main className={styles["content"]}>
        <Header />
        <InputBar />
        <Button />
        <Queue />
        <ImagesDisplay />
      </main>
    </AppProvider>
  );
}

export default App;
