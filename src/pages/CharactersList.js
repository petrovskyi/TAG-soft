import React, { useEffect, useReducer } from "react";
import { service } from "../api/service";
import { Table } from "../components/CharactersList/Table/Table";
import { PaginationList } from "../components/CharactersList/Pagination/Pagination";

const initialState = {
  initPage: service.url,
  info: {
    count: null,
    next: null,
    pages: null,
    prev: null,
  },
  results: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "setFetchedData":
      return { ...state, ...action.payload };
    case "setPage":
      return { ...state, initPage: action.payload };

    default:
      throw new Error();
  }
}

export const CharacterList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const updateState = async () => {
      const response = await service.getCharactersList();

      dispatch({ type: "setFetchedData", payload: response });
    };

    updateState();
  }, [state.initPage]);

  return (
    <section>
      <h2>characters list</h2>
      <hr />
      <Table characters={state.results} />
      <PaginationList pagesAmount={state.info.pages} />
    </section>
  );
};
