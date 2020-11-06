import React from "react";
import { service } from "../api/service";

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
    case "SELECT_CHARACTER":
      return { ...state, selectedCharacter: action.payload };
    case "SORT_CHARACTERS_BY_NAME":
      return { ...state, sortByName: !state.sortByName };
    case "SET_DATA_FROM_API_CALL":
      return { ...state, ...action.payload };
    case "MOVE_TO_SELECTED_PAGE":
      return { ...state, initPage: action.payload };
    case "MOVE_TO_NEXT_PAGE":
      return { ...state, initPage: state.info.next };
    case "MOVE_TO_PREVIOUS_PAGE":
      return { ...state, initPage: state.info.prev };
    default:
      throw new Error();
  }
}
