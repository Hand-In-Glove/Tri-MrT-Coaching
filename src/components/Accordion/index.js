import React, { useState } from "react";

import css from "./Accordion.module.css";

function Accordion({ title, textList }) {
  const [isClicked, setIsClicked] = useState(false);

  function clickHandler() {
    setIsClicked(!isClicked);
  }

  return (
    <div className={css.AccordionContainer} onClick={clickHandler}>
      <button
        className={isClicked ? `${css.accordion} ${css.active}` : css.accordion}
      >
        {title}
      </button>
      <div className={isClicked ? `${css.panel} ${css.showPanel}` : css.panel}>
        {textList.map((text) => (
          <p>{text}</p>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
