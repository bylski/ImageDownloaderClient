import React, { useState } from "react";
import { AppContext, AppContextType } from "./app-context";

const AppProvider: React.FC<{ children?: React.ReactNode }> = (props) => {
  const [queueElements, setQueueElements] = useState<Array<{ title: string }>>(
    []
  );

  const onAddToQueue = (item: { title: string }) => {
    setQueueElements((prev) => {
      return [...prev, item];
    });
  };

  const AppContextValues: AppContextType = {
    queueElements,
    onAddToQueue,
  };

  return (
    <AppContext.Provider value={AppContextValues}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
