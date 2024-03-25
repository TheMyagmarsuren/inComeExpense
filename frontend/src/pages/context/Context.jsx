import { createContext, useState, useEffect } from "react";
export const ContextData = createContext();

export default function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const createUser = async () => {
    try {
      const option = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      };
      const user = await fetch("http://localhost:3001/users", option);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ContextData.Provider value={{ data, setData, createUser }}>
      {children}
    </ContextData.Provider>
  );
}
