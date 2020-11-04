import React, { useEffect, useReducer } from "react";
import { Head } from "./Head/Head";
import { Body } from "./Body/Body";

export const Table = ({ characters }) => {
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
  // const headKeys = Object.keys(formattedData);
  // const bodyValues = Object.values(formattedData);
  // console.log(formattedData);
  return (
    <>
      <h2>table</h2>
      <table>
        <Head keys={keys} />
        <Body values={formattedData} />
      </table>
    </>
  );
};
