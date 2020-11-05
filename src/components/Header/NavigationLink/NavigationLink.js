import React from "react";
import { Link } from "react-router-dom";

export const NavigationLinks = () => {
  const LINKS = [
    { title: "layout skills", href: "/block-layout" },
    {
      title: "rick & morty",
      href: "/characters",
    },
  ];

  const createLinks = (links = []) =>
    links.map((link, i) => (
      <li key={"link" + i}>
        <Link to={link.href}>{link.title}</Link>
      </li>
    ));

  const navigationLinks = createLinks(LINKS);

  return <ul>{navigationLinks}</ul>;
};
