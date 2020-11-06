import React, { useReducer } from "react";
import Router from "../../router/router";
import { Context, reducer, initialState } from "../../utils/context";

const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ dispatch, state }}>
      <main>
        <Router />
      </main>
    </Context.Provider>
  );
};

export default Main;
