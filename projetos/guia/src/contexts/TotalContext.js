import { createContext, useContext, useState } from "react";

const TotalContext = createContext(null);

export const TotalContextProvider = ({ children }) => {
  const [state, setState] = useState({ total: 0 });

  function add(amount = 1) {
    setState({
      total: state.total + amount
    });
  }

  return (
    <TotalContext.Provider value={{ ...state, add }}>
      {children}
    </TotalContext.Provider>
  );
};

export const useTotalContext = () => {
  return useContext(TotalContext);
};

export default TotalContext;
