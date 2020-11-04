import React, { useEffect, useReducer } from "react";
import { Cell } from "../Cell/Cell";

export const Row = ({ keyChildren, data }) => {
  const isReadyToShow = Array.isArray(data);

  if (isReadyToShow) return <tr key={keyChildren}>{data}</tr>;

  const extractValues = (element) => Object.values(element);
  const generateCell = (values) =>
    values.map((value) => <Cell key={"cell" + value} value={value} />);

  const bodyCells = generateCell(extractValues(data));

  return <tr key={keyChildren}>{bodyCells}</tr>;
};
