import React, { useContext } from "react";
import { Context } from "../../../../utils/context";
import { Button } from "../Button/Button";
import style from "./Navigation.module.scss";

export const Navigation = () => {
  const { state, dispatch } = useContext(Context);
  const paginationDirection = ["prev", "next"];

  function generatePaginationButton() {
    const movementImpossible = state.info;

    return paginationDirection.map((direction) => (
      <Button
        isVisible={movementImpossible[direction]}
        key={direction}
        direction={direction}
      />
    ));
  }

  function handleButtonClick(e) {
    const eventOnButton = e.target !== e.currentTarget;

    if (eventOnButton) {
      const button = e.target.textContent;
      if (button === "next") dispatch({ type: "MOVE_TO_NEXT_PAGE" });
      if (button === "prev") dispatch({ type: "MOVE_TO_PREVIOUS_PAGE" });
    }
  }

  const navigationButtons = generatePaginationButton();

  return (
    <div className={style.container} onClick={handleButtonClick}>
      {navigationButtons}
    </div>
  );
};
