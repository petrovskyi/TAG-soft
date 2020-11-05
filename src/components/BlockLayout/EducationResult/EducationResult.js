import React from "react";
import styles from "../Block.module.scss";

export const EducationResult = () => {
  return (
    <div className={styles.results}>
      <h2>Обучение по продажам</h2>
      <p className={styles.info}>Вы сделали 13 продаж и заработали:</p>
      <p>$ 2 000</p>
    </div>
  );
};
