import React, { useContext } from "react";
import { Row } from "../Row/Row";
import "./Body.module.scss";

export const Body = ({ values = [] }) => {
  function generateRow(elements, key) {
    return (
      <Row id={elements.id} key={key} keyChildren={key} data={elements}></Row>
    );
  }

  function generateTableBody(data = []) {
    return values.map((character, i) => generateRow(character, i));
  }

  return <tbody>{generateTableBody(values)}</tbody>;
};
