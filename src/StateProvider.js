import React, { createContext, useContext, useReducer } from "react";

//preparation of data layer
export const StateContext = createContext();

//wrapper
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
