import React from "react";
import { service } from "../../api/service";

export const Context = React.createContext();

export const initialState = {
  initPage: service.apiURL + service.userQuery,
  sortByName: false,
  selectedCharacter: null,
  info: {
    count: null,
    next: null,
    pages: null,
    prev: null,
  },
  results: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case "handleSelectCharacter":
      return { ...state, selectedCharacter: action.payload };
    case "handleSort":
      return { ...state, sortByName: !state.sortByName };
    case "setFetchedData":
      return { ...state, ...action.payload };
    case "setPage":
      return { ...state, initPage: action.payload };
    case "nextPage":
      return { ...state, initPage: state.info.next };
    case "prevPage":
      return { ...state, initPage: state.info.prev };
    default:
      throw new Error();
  }
}
