import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const InitialState = {
  transactions: [
    { id: 1, text: "Shoe", amount: -50 },
    { id: 2, text: "Salary", amount: 600 },
    { id: 3, text: "Wrist Watch", amount: -80 },
    { id: 4, text: "Phone", amount: 150 },
  ],
};

//Create Context
export const GlobalContext = createContext(InitialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction 
    });
  }

  
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
        
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
