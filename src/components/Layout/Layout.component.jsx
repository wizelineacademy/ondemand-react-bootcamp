import React, { useContext, useState } from "react";

const AppContext = React.createContext();

function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`Can't use appContext without an AppContext!`);
  }
  return context;
}

function Layout({ children }) {
  const [input, setInput] = useState("");
  return (
    <AppContext.Provider value={{ input, setInput }}>
      <div className="container">{children}</div>
    </AppContext.Provider>
  );
}

export { useAppContext };
export default Layout;
