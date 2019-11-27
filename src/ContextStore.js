import React, {createContext, useState} from "react";

export const MainContext = createContext();

export const MainProvider = (props) => {
  const [state, setState] = useState("");

  return (
    <MainContext.Provider value={[state, setState]}>
      {props.children}
    </MainContext.Provider>
  );
};
