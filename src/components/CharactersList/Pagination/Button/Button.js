import React from "react";

export const Button = ({ direction, isVisible }) => {
  return <button style={{ opacity: isVisible ? 1 : 0 }}>{direction}</button>;
};
