import React, { useEffect, useReducer } from "react";
import { service } from "../../api/service";

export const PaginationList = ({ pagesAmount, dispatch }) => {
  function createPagination(amount = 0) {
    const pagination = [];
    for (let page = 0; page < amount; page++) {
      const id = service.url + `?page=${page}`;

      pagination.push(
        <li key={"pagination" + page} id={id}>
          {page + 1}
        </li>
      );
    }
    return pagination;
  }

  function handlePagination(e) {
    const newPage = e.target.id;
    dispatch({ type: "setPage", payload: newPage });
  }

  return (
    <section>
      <h2>pagination list</h2>
      <ul onClick={handlePagination}>{createPagination(pagesAmount)}</ul>
    </section>
  );
};
