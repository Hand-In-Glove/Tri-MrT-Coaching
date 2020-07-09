import React from "react";

import { siteCopy } from "../../copy/siteCopy";
import css from "./Home.module.css";
import hero from "./coaches.webp";
import map from "./location.svg";
import study from "./knowledge.svg";
import bike from "./mrtbike.webp";

function Home() {
  return (
    <div className={css.Home}>
      <div className={css.heroHeader}>
        <img id={css.heroLogo} src={hero} alt="tri mr t logo" />
        <div id={css.heroText}>
          <h1>
            <span className={css.red}>Tri</span>{" "}
            <span className={css.blue}>Mr T</span>{" "}
            <span className={css.white}>Coaching</span>
          </h1>
          <h3>Personalised Programmes & Individual Training</h3>
        </div>
      </div>
      <div className={css.homeContent}>
        <h2 className={css.red}>
          "Why spend thousands of pounds on the latest equipment and only save
          seconds, when you can save minutes with an effective progressive
          training programme ?"
        </h2>
        <img className={css.icon} src={map} alt="map" />
        <p>{siteCopy.home[0]}</p>
        <p>{siteCopy.home[1]}</p>
        <img className={css.icon} src={study} alt="book" />
        <p>{siteCopy.home[2]}</p>
        <p className={css.blue}>{siteCopy.home[3]}</p>
        <img className={css.homeImage} src={bike} alt="book" />
        <p>{siteCopy.home[4]}</p>
      </div>
    </div>
  );
}

export default Home;
