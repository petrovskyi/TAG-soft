import React, { useEffect, useReducer, useContext } from "react";
import { Context } from "../reducer";
import { Button } from "./Button/Button";

export const Navigation = () => {
  const { dispatch } = useContext(Context);
  const paginationDirection = ["prev", "next"];

  function generatePaginationButton() {
    return paginationDirection.map((direction) => (
      <Button key={direction} direction={direction} />
    ));
  }
  function handleButtonClick(e) {
    const button = e.target.textContent;
    if (button === "next") dispatch({ type: "nextPage" });
    if (button === "prev") dispatch({ type: "prevPage" });
  }

  return <div onClick={handleButtonClick}>{generatePaginationButton()}</div>;
};
