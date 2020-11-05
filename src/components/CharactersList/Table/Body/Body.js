import React from "react";
import { Row } from "../Row/Row";
import styles from "../Table.module.scss";

export const Body = ({ values = [] }) => {
  function generateRow(elements, key) {
    return (
      <Row
        rowStyles={styles.row}
        id={elements.id}
        key={key}
        keyChildren={key}
        data={elements}
      ></Row>
    );
  }

  function generateTableBody(data = []) {
    return values.map((character, i) => generateRow(character, i));
  }

  return <tbody className={styles.body}>{generateTableBody(values)}</tbody>;
};
