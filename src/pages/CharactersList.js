import React, { useEffect, useContext } from "react";
import { Table } from "../components/CharactersList/Table/Table";
import { PaginationList } from "../components/CharactersList/Pagination/Pagination";
import { Button } from "../components/shared/Button";

import { Context } from "../components/Main/reducer";
import { service } from "../api/service";

import styles from "../components/CharactersList/CharactersList.module.scss";

export const CharacterList = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    const updateState = async () => {
      const response = await service.retrieveDataFrom(state.initPage);
      dispatch({ type: "setFetchedData", payload: response });
    };

    updateState();
  }, [dispatch, state.initPage]);

  function handleSortByName(e) {
    dispatch({ type: "handleSort" });
  }

  return (
    <section>
      <PaginationList />
      <Button action={handleSortByName} warning={true}>
        sort by name
      </Button>
      <Table />
    </section>
  );
};
