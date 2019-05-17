import React from "react";

import classes from "./index.scss";

const ContactUpdateForm = ({ inputs, change, errors, update }, props) => {
  const inputsOutput = [];

  for (let key in inputs) {
    const input = inputs[key];
    const error = errors.find(error => error === key);

    inputsOutput.push(
      <input
        className={error === key ? classes.HighLighted + " error" : null}
        type={input.type}
        placeholder={key}
        value={input.value}
        id={key}
        onChange={change}
        key={key}
      />
    );
  }

  return (
    <li className={classes.UpdateItem}>
      {inputsOutput}
      <button onClick={update}>update</button>
    </li>
  );
};

export default ContactUpdateForm;
