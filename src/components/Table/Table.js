import React, { useEffect, useReducer } from "react";
import { Head } from "./Head/Head";
import { Body } from "./Body/Body";

export const Table = ({ characters }) => {
  return (
    <table>
      <Head keys={""} />
      <Body values={""} />
    </table>
  );
};
