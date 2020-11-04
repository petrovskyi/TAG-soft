import React, { useEffect, useReducer } from "react";
import { Row } from "../Row/Row";

export const Head = ({ keys }) => {
  const tableHeaders = keys.map((header, i) => (
    <th key={"header" + i}>{header}</th>
  ));

  return (
    <thead>
      <Row keyChildren={"headerRow"} data={tableHeaders} />
    </thead>
  );
};
