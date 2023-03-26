import { createContext } from "react"

type AppContextType = {
   queueElements: Array<any>,
   onAddToQueue(item: {title: string}): void,
  };
  
  const AppContext = createContext<AppContextType | null>(null);
  
  export { AppContext };
  export type { AppContextType };