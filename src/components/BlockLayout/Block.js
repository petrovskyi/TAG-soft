import React, { useState } from "react";
import { EducationResult } from "./EducationResult/EducationResult";
import { StatsContainer } from "./StatsContainer/StatsContainer";
import { Shadow } from "./Shadow/Shadow";
import styles from "./Block.module.scss";

export const Block = () => {
  const [percent, setPercent] = useState(0);

  function getRandomEvenNumber() {
    return Math.floor(Math.random() * (100 - 10 + 1)) + 10;
  }

  function handleClick() {
    let percent = getRandomEvenNumber();
    const isOdd = Boolean(percent % 2);
    if (!isOdd) {
      setPercent(percent);
    } else {
      handleClick();
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.rightBox}>25</div>
        <div className={styles.card}>
          <EducationResult />
          <StatsContainer percent={percent} handleClick={handleClick} />
          <Shadow />
        </div>
      </div>
    </div>
  );
};
