import React from "react";

import Accordion from "../Accordion";

import css from "./Plans.module.css";
import { siteCopy } from "../../copy/siteCopy";

function Plans() {
  return (
    <div className={css.Plans}>
      <h1>Plans</h1>
      {siteCopy.accordion.map((section, i) => {
        return (
          <Accordion key={i} title={section.title} textList={section.text} />
        );
      })}
    </div>
  );
}

export default Plans;
