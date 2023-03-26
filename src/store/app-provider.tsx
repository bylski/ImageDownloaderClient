import React, { useState, useEffect } from "react";
import { AppContext, AppContextType } from "./app-context";

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
      const res = await fetch(isUploadedURL, {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

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
