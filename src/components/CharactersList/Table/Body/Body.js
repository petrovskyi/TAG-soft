import React, { useEffect, useReducer } from "react";
import { Row } from "../Row/Row";

export const Body = ({ values = [] }) => {
  function generateRow(elements, key) {
    return <Row key={key} keyChildren={key} data={elements} />;
  }

  function generateTableBody(data = []) {
    return values.map((character, i) => generateRow(character, i));
  }

  return <tbody>{generateTableBody(values)}</tbody>;
};
