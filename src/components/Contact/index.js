import React from "react";

import Form from "../Form";

import css from "./Contact.module.css";
import twitter from "../../images/Twitter_Social_Icon_Rounded_Square_Color.svg";
import facebook from "../../images/facebook.svg";

function Contact() {
  return (
    <div className={css.Contact}>
      <div className={css.contactContent}>
        <h1 className={css.red}>
          We'd love to hear from you and get you on board.
        </h1>
        <h2>
          Use the contact form or any of the social media channels and we'll be
          in touch as soon as we can!
        </h2>
        <div className={css.socials}>
          <a href="https://twitter.com/TriMrTCoaching">
            <img src={twitter} alt="twitter icon" />
          </a>
          <a href="https://www.facebook.com/trimrtcoaching?ref=hl">
            <img src={facebook} alt="facebook icon" />
          </a>
        </div>
      </div>
      <div className={css.contactForm}>
        <Form />
      </div>
    </div>
  );
}

export default Contact;
