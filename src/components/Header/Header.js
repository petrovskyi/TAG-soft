import React from "react";
import { NavigationLinks } from "./NavigationLink/NavigationLink";
import "./Header.module.scss";

export const Header = () => {
  return (
    <header>
      <nav>
        <NavigationLinks />
      </nav>
    </header>
  );
};
