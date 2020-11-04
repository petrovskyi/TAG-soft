import React, { useEffect, useReducer } from "react";

export const Cell = ({ value }) => {
  return <td key={value + "cell"}>{value}</td>;
};
