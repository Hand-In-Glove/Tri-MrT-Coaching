import React from "react";
import { Link } from "react-router-dom";

import { routes } from "../../../config";
import css from "./Menu.module.css";

const links = [
  { text: "Home", path: routes.home },
  { text: "About", path: routes.about },
  { text: "Plans", path: routes.plans },
  { text: "Contact", path: routes.contact },
];

function Menu({ isOpen, setIsOpen }) {
  return (
    <div className={isOpen ? css.openMenu : css.burgerMenu} isOpen={isOpen}>
      {links.map(({ text, path, image }) => (
        <Link key={text} to={path} onClick={() => setIsOpen(!isOpen)}>
          {image && <img src={image} className={css.navIcon} alt="nav icon" />}
          <p className={css.linkName}>{text}</p>
        </Link>
      ))}
    </div>
  );
}

export default Menu;
