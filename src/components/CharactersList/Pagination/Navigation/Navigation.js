import React, { useContext } from "react";
import { Context } from "../../../Main/reducer";
import { Button } from "../Button/Button";
import style from "./Navigation.module.scss";

export const Navigation = () => {
  const { state, dispatch } = useContext(Context);
  const paginationDirection = ["prev", "next"];

  function generatePaginationButton() {
    const movementImpossible = state.info;

    return paginationDirection.map(
      (direction) =>
        movementImpossible[direction] && (
          <Button key={direction} direction={direction} />
        )
    );
  }

  function handleButtonClick(e) {
    const button = e.target.textContent;
    if (button === "next") dispatch({ type: "nextPage" });
    if (button === "prev") dispatch({ type: "prevPage" });
  }

  const navigationButtons = generatePaginationButton();

  return (
    <div className={style.container} onClick={handleButtonClick}>
      {navigationButtons}
    </div>
  );
};
