import React, { createContext, useContext, useState } from "react";

// Tạo Context
const AppContext = createContext();

// Tạo Provider
export const AppProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

  return (
    <AppContext.Provider value={{ articles, setArticles }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook để sử dụng Context
export const useAppContext = () => {
  return useContext(AppContext);
};
