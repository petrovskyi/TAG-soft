import React from "react";
import styles from "../Block.module.scss";
import shadow from "../../../images/shadow-bottom.png";

export const Shadow = () => {
  return <img className={styles.shadow} src={shadow} alt="shadow" />;
};
