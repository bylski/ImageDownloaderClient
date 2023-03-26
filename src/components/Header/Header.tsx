import React from "react";
import styles from "./styles/Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles["header"]}>
      <h1 className={styles["logo"]}>
        Image<span>Downloader</span>
      </h1>
      <p className={styles["text"]}>
        Welcome to ImageDownloader!
        <br />
        Provide an URL of image from the Web and we will store it for you.
      </p>
    </header>
  );
};

export default Header;
