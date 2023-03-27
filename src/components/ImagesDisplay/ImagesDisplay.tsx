import React, { useState, useEffect } from "react";
import styles from "./styles/ImagesDisplay.module.scss";
import Image from "./Image";

const ImagesDisplay: React.FC = () => {
  const [imagesList, setImagesList] = useState<
    Array<{
      _id: string;
      originUrl: string;
      storedUrl: string;
      dateAdded: string;
      dateUploaded: string;

      status: "uploading" | "uploaded" | "upload failed";
    }>
  >([]);

  const getImagesData = async () => {
    let apiAddress = "";
    if (process.env.NODE_ENV === "development") {
      apiAddress = process.env.REACT_APP_API_ADDRESS_DEV!
    } else {
      apiAddress = process.env.REACT_APP_API_ADDRESS_PROD!
    }
    const res = await fetch(`${apiAddress}/images`, {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    return data as Array<{
      _id: string;
      originUrl: string;
      storedUrl: string;
      dateAdded: string;
      dateUploaded: string;
      status: "uploading" | "uploaded" | "upload failed";
    }>;
  };

  useEffect(() => {
    getImagesData().then((data) => {
      setImagesList(data);
    });
  }, []);

  const refreshHandler = () => {
    getImagesData().then((data) => {
      setImagesList(data);
    });
  };

  const imagesToDisplay = imagesList.map((image, i) => {
    const { originUrl, storedUrl, dateAdded, dateUploaded } = image;
    return (
      <Image
      key={`displayedImage${i}`}
        originUrl={originUrl}
        storedUrl={storedUrl}
        dateAdded={dateAdded}
        dateUploaded={dateUploaded}
      />
    );
  });

  return (
    <section className={styles["images-display"]}>
      <span className={styles["label"]}>Images Gallery: </span>
      <button onClick={refreshHandler} className={styles["refresh-btn"]}>
        REFRESH
      </button>
      <div className={styles["images-container"]}>{imagesToDisplay}</div>
    </section>
  );
};

export default ImagesDisplay;
