import React from "react";
import PropTypes from "prop-types";

import css from "./Burger.module.css";

function Burger({ isOpen, setIsOpen }) {
  return (
    <div
      className={css.styledBurger}
      isOpen={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={isOpen ? css.cross : css.line} />
      <div className={isOpen ? css.cross : css.line} />
      <div className={isOpen ? css.cross : css.line} />
    </div>
  );
}

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
export default Burger;
