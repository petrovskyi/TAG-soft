import React, { useEffect, useReducer } from "react";
import { Row } from "../Row/Row";

export const Head = ({ keys }) => {
  function generateTableHeaders() {
    return keys.map((header, i) => <th key={"header" + i}>{header}</th>);
  }

  const headers = generateTableHeaders();

  return (
    <thead>
      <Row keyChildren={"headerRow"} data={headers} />
    </thead>
  );
};
