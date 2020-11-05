import React, { useEffect, useContext } from "react";
import { Table } from "../components/CharactersList/Table/Table";
import { Pagination } from "../components/CharactersList/Pagination/Pagination";
import { Button } from "../components/shared/Button";

import { Context } from "../components/Main/reducer";
import { service } from "../api/service";

import styles from "../components/CharactersList/CharactersList.module.scss";

export const CharacterList = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    const updateState = async () => {
      const response = await service.callAPI(state.initPage);
      dispatch({ type: "SET_DATA_FROM_API_CALL", payload: response });
    };

    updateState();
  }, [dispatch, state.initPage]);

  function handleSortByName(e) {
    dispatch({ type: "SORT_CHARACTERS_BY_NAME" });
  }

  return (
    <section className={styles.container}>
      <Pagination />

      <Button action={handleSortByName} warning={true}>
        sort by name
      </Button>
      <Table />
    </section>
  );
};
