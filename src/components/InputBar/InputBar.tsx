import React, { useState, useContext } from "react";
import styles from "./styles/InputBar.module.scss";
import Button from "../Button/Button";
import { AppContext } from "../../store/app-context";
import axios, { AxiosError} from "axios";

const InputBar: React.FC = () => {
  const ctx = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sendImageForUpload = async () => {
      let apiAddress = "";
      if (process.env.NODE_ENV === "development") {
        apiAddress = process.env.REACT_APP_API_ADDRESS_DEV!;
      } else {
        apiAddress = process.env.REACT_APP_API_ADDRESS_PROD!;
      }
      try {
        const res = await axios(`${apiAddress}/images`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          data: JSON.stringify({
            imageUrl: inputValue,
          }),
        });
        const data = await res.data
        return data;
      } catch (e: any) {
        throw new Error(
          `[${e.code}] Failed to upload the image, invalid request (invalid URL?)`
        );
      }
    };
    sendImageForUpload()
      .then((res) => {
        ctx?.onAddToQueue({
          originURL: inputValue,
          isUploadedURL: res.data,
          isUploaded: false,
        });
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <section className={styles["container"]}>
      <form onSubmit={submitFormHandler} className={styles["input-form"]}>
        <input
          onChange={inputChangeHandler}
          placeholder={"Pass here the URL of the image you want to save..."}
          className={styles["input-bar"]}
          type="text"
          value={inputValue}
        ></input>
        <Button />
      </form>
    </section>
  );
};

export default InputBar;
