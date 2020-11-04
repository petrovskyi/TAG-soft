import React, { useEffect, useReducer } from "react";
import { Row } from "../Row/Row";

export const Body = ({ values = [] }) => {
  const generateRow = (elements, key) => (
    <Row key={key} keyChildren={key} data={elements} />
  );

  return (
    <tbody>{values.map((character, i) => generateRow(character, i))}</tbody>
  );
};
