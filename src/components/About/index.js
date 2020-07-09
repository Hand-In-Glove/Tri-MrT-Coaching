import React from "react";

import css from "./About.module.css";

import { siteCopy } from "../../copy/siteCopy";

function About() {
  return (
    <div className={css.About}>
      <h1 className={css.red}>Our Coach</h1>
      <img
        id={css.bioPic}
        src="https://static.wixstatic.com/media/304526_ddcb1a0d508840ac898589b45610ab67~mv2.jpg/v1/crop/x_0,y_0,w_810,h_607/fill/w_423,h_313,al_c,q_80,usm_0.66_1.00_0.01/unnamed.webp"
        alt="The Boss"
      ></img>
      <p>{siteCopy.about[0]}</p>
      <p>
        Currently a Ph.D. Researcher of Sports Coaching / Psychology at
        Canterbury Christchurch University and a member of{" "}
        <a href="www.bases.org.uk">BASES</a>.
      </p>
      <p>{siteCopy.about[2]}</p>
      <p>{siteCopy.about[3]}</p>
      <p className={css.blue}>{siteCopy.about[4]}</p>
      <p className={css.blue}>{siteCopy.about[5]}</p>
    </div>
  );
}

export default About;
