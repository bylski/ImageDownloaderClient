import { createContext } from "react"

type AppContextType = {
   queueElements: Array<{originURL: string, isUploadedURL: string, isUploaded: boolean}>,
   onAddToQueue(item: {originURL: string, isUploadedURL: string, isUploaded: boolean}): void,
   checkIfUploaded(isUploadedURL: string): Promise<{isImgUploaded: boolean}>,
  };
  
  const AppContext = createContext<AppContextType | null>(null);
  
  export { AppContext };
  export type { AppContextType };