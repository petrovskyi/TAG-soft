import React, { useContext } from "react";
import { Context } from "../../Main/reducer";
import { Navigation } from "./Navigation/Navigation";
import { service } from "../../../api/service";

import styles from "./pagination.module.scss";

export const Pagination = () => {
  const { state, dispatch } = useContext(Context);
  const pagesAmount = state.info.pages;
  const currentPage = state.initPage;

  function createPagination(amount = 0) {
    const pagination = [];
    for (let page = 0; page < amount; page++) {
      const id = service.apiURL + service.userQuery + `?page=${page + 1}`;
      const selected = id === currentPage;

      pagination.push(
        <li
          className={selected ? styles.selected : null}
          key={"pagination" + page}
          id={id}
        >
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
    <div className={styles.container}>
      <ul className={styles.list} onClick={handlePaginationPageClick}>
        {createPagination(pagesAmount)}
      </ul>
      <Navigation />
    </div>
  );
};
