import React, { useState, useEffect } from "react";
import { AppContext, AppContextType } from "./app-context";
import axios from "axios"

const AppProvider: React.FC<{ children?: React.ReactNode }> = (props) => {
  const [queueElements, setQueueElements] = useState<
    Array<{ originURL: string; isUploadedURL: string; isUploaded: boolean }>
  >([]);

  const onAddToQueue = (item: {
    originURL: string;
    isUploadedURL: string;
    isUploaded: boolean;
  }) => {
    setQueueElements((prev) => {
      return [...prev, item];
    });
  };

  const checkIfUploaded = async (isUploadedURL: string): Promise<{isImgUploaded: boolean}> => {
      const res = await axios(isUploadedURL, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data: { isImgUploaded: boolean} = await res.data;

      return data;
    };


  const AppContextValues: AppContextType = {
    queueElements,
    onAddToQueue,
    checkIfUploaded,
  };

  return (
    <AppContext.Provider value={AppContextValues}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
