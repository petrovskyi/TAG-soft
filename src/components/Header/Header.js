import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const LINKS = [
    { title: "layout skills", href: "/block-layout" },
    {
      title: "characters list",
      href: "/characters",
    },
  ];

  const createLinks = (links = []) =>
    links.map((link, i) => (
      <li key={"link" + i}>
        <Link to={link.href}>{link.title}</Link>
      </li>
    ));

  return (
    <header>
      <nav>
        <ul>{createLinks(LINKS)}</ul>
      </nav>
    </header>
  );
};
