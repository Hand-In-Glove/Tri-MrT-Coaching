import React from "react";

import css from "./TextBlock.module.css";

function TextBlock({ text }) {
  return (
    <div className={css.textContainer}>
      <p>{text}</p>
    </div>
  );
}

export default TextBlock;
