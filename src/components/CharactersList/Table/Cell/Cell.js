import React from "react";

export const Cell = ({ value }) => {
  return <td key={value + "cell"}>{value}</td>;
};
