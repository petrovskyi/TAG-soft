import React from "react";

import styles from "./Button.module.scss";

export const Button = ({ children, warning, action }) => {
  return (
    <button
      className={warning ? styles.warning : styles.btn}
      onClick={() => action()}
    >
      {children}
    </button>
  );
};
