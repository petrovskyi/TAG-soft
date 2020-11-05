import React from "react";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { ActionContainer } from "../ActionContainer/ActionContainer";
import styles from "../Block.module.scss";

export const StatsContainer = ({ handleClick, percent }) => {
  return (
    <div className={styles.progressWrapper}>
      <ProgressBar percent={percent} />
      <ActionContainer handleClick={handleClick} />
    </div>
  );
};
