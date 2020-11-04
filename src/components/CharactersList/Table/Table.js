import React, { useContext } from "react";
import { Context } from "../reducer";
import { Head } from "./Head/Head";
import { Body } from "./Body/Body";

export const Table = () => {
  const { state } = useContext(Context);

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

  const formattedData = formatData(characters);

  return (
    <table>
      <Head keys={keys} />
      <Body values={formattedData} />
    </table>
  );
};
