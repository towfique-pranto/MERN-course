import { createContext } from "react";

export const DataContextAPI = createContext();

export const DataProvider = ({ children }) => {
  const value = "This is some data from context";
  return (
    <DataContextAPI.Provider value={value}>{children}</DataContextAPI.Provider>
  );
};
