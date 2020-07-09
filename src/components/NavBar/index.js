import React from "react";
import { NavLink } from "react-router-dom";

import css from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={css.navBar}>
      <a href="/" id={css.navLogo}>
        <img
          src="https://static.wixstatic.com/media/304526_6a1cbacbba544551922fd3ff4fe183c7.jpg/v1/fill/w_390,h_270,al_c,q_80,usm_0.66_1.00_0.01/304526_6a1cbacbba544551922fd3ff4fe183c7.webp"
          alt="tri mr t logo"
        />
      </a>
      <nav>
        <ul>
          <NavLink
            exact
            to="/"
            className={css.navLink}
            activeClassName={css.navLinkActive}
          >
            Home
          </NavLink>

          <NavLink
            exact
            to="/about"
            className={css.navLink}
            activeClassName={css.navLinkActive}
          >
            Our Coach
          </NavLink>

          <NavLink
            exact
            to="/plans"
            className={css.navLink}
            activeClassName={css.navLinkActive}
          >
            Training Plans
          </NavLink>

          <NavLink
            exact
            to="/contact"
            className={css.navLink}
            activeClassName={css.navLinkActive}
          >
            Contact Us
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
