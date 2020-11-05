import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../../Main/reducer";
import { Head } from "./Head/Head";
import { Body } from "./Body/Body";
import "./Table.module.scss";

export const Table = () => {
  const { state, dispatch } = useContext(Context);
  const history = useHistory();

  const allowedToSort = state.sortByName;
  const characters = state.results;
  const keys = ["id", "name"];

  function extractFields(el) {
    return {
      id: el.id,
      name: el.name,
    };
  }

  function formatData(data = []) {
    const extractData = () => data.map((character) => extractFields(character));
    return extractData();
  }

  function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  function sortByName(data) {
    return data.sort((a, b) => compare(a, b));
  }

  const formattedData = allowedToSort
    ? sortByName(formatData(characters))
    : formatData(characters);

  function handleSelectCharacter(e) {
    const selectedRow = e.target.closest("tr");
    const rowFromBody = selectedRow.closest("tbody");

    if (!rowFromBody) return;
    const characterID = selectedRow.querySelector("td").textContent;
    const character = state.results.find(
      (character) => character.id === +characterID
    );

    dispatch({ type: "handleSelectCharacter", payload: character });
    history.push("/characters/" + characterID);
  }

  return (
    <table onClick={handleSelectCharacter}>
      <Head keys={keys} />
      <Body values={formattedData} />
    </table>
  );
};
