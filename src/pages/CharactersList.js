import React, { useEffect, useReducer } from "react";
import { Table } from "../components/CharactersList/Table/Table";
import { PaginationList } from "../components/CharactersList/Pagination/Pagination";

import { service } from "../api/service";
import {
  Context,
  reducer,
  initialState,
} from "../components/CharactersList/reducer";

export const CharacterList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const updateState = async () => {
      const response = await service.retrieveDataFrom(state.initPage);
      dispatch({ type: "setFetchedData", payload: response });
    };

    updateState();
  }, [state.initPage]);

  return (
    <section>
      <Context.Provider value={{ dispatch, state }}>
        <h2>characters list</h2>
        <hr />
        <Table />
        <PaginationList />
      </Context.Provider>
    </section>
  );
};
