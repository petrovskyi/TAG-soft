import React from "react";
import { Cell } from "../Cell/Cell";

export const Row = ({ keyChildren, data, rowStyles }) => {
  const isReadyToShow = Array.isArray(data);

  function extractValues(element) {
    return Object.values(element);
  }
  function generateCell(values) {
    return values.map((value) => <Cell key={"cell" + value} value={value} />);
  }

  if (isReadyToShow) return <tr key={keyChildren}>{data}</tr>;

  const bodyCells = generateCell(extractValues(data));

  return <tr key={keyChildren}>{bodyCells}</tr>;
};
