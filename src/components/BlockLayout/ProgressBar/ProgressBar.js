import React, { useRef } from "react";
import styles from "../Block.module.scss";

export const ProgressBar = ({ percent }) => {
  const rangeRef = useRef(null);

  const sliderRangeWidth = (rangeRef.current?.offsetWidth / 100) * percent;
  return (
    <>
      <h2>Месячный план выполнен на</h2>
      <div
        style={{
          position: "relative",
        }}
      >
        <div ref={rangeRef} className={styles.progressBar}>
          <span>{percent}%</span>
          <div
            style={{
              width: sliderRangeWidth + "px",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};
