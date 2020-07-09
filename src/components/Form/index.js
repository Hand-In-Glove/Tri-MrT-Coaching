import React, { useReducer } from "react";

import css from "./Form.module.css";
import { initForm } from "../../config";

function Form() {
  function formReducer(state, { field, value }) {
    return {
      ...state,
      [field]: value,
    };
  }
  const [formState, dispatch] = useReducer(formReducer, initForm);

  function changeHandler(e) {
    dispatch({ field: e.target.name, value: e.target.value });
  }

  const { name, email, subject, message } = formState;

  function submitForm(e) {
    e.preventDefault();
    console.log(JSON.stringify(formState));
  }

  return (
    <div className={css.formContainer}>
      <form className={css.formStyle} onSubmit={(e) => submitForm(e)}>
        <label className={css.nameLabel}>
          Name
          <input
            type="text"
            name="name"
            placeholder="Name *"
            required
            value={name}
            onChange={changeHandler}
          />
        </label>
        <label className={css.emailLabel}>
          Email
          <input
            type="email"
            name="email"
            placeholder="email@example.com *"
            required
            value={email}
            onChange={changeHandler}
          />
        </label>
        <label className={css.subjectLabel}>
          Subject
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={subject}
            onChange={changeHandler}
          />
        </label>
        <label className={css.messageLabel}>
          Message
          <textarea
            name="message"
            placeholder="Type your message here..."
            rows="10"
            required
            value={message}
            onChange={changeHandler}
          />
        </label>
        <input type="submit" className={css.submitBtn} value="Send" />
      </form>
    </div>
  );
}

export default Form;
