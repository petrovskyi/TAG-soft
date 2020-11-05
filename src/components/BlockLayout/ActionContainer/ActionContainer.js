import React from "react";
import styles from "../Block.module.scss";

export const ActionContainer = ({ handleClick }) => {
  return (
    <div className={styles.wrapperButton}>
      <button onClick={handleClick}>Продолжить</button>
      <p>Осталось 8 дней</p>
    </div>
  );
};
