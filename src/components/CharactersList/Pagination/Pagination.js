import React, { useEffect, useReducer, useContext } from "react";
import { Context } from "../reducer";
import { Navigation } from "./Navigation/Navigation";
import { service } from "../../../api/service";

export const PaginationList = () => {
  const { state, dispatch } = useContext(Context);

  const paginationDirection = ["prev", "next"];
  const pagesAmount = state.info.pages;

  function createPagination(amount = 0) {
    const pagination = [];
    for (let page = 0; page < amount; page++) {
      const id = service.apiURL + service.userQuery + `?page=${page}`;

      pagination.push(
        <li key={"pagination" + page} id={id}>
          {page + 1}
        </li>
      );
    }
    return pagination;
  }

  function handlePaginationPageClick(e) {
    const newPage = e.target.id;

    dispatch({ type: "setPage", payload: newPage });
  }

  return (
    <div>
      <h2>pagination list</h2>
      <Navigation />
      <ul onClick={handlePaginationPageClick}>
        {createPagination(pagesAmount)}
      </ul>
    </div>
  );
};
