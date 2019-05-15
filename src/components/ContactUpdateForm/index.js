import React from "react";

import classes from "./index.scss";

const ContactUpdateForm = ({ inputs, change, errors, update }) => {
  const inputsOutput = [];

  for (let key in inputs) {
    const input = inputs[key];
    const error = errors.find(error => error === key);

    inputsOutput.push(
      <input
        className={error === key ? classes.HighLighted : null}
        type={input.type}
        placeholder={key}
        value={input.value}
        onChange={e => change(e, key)}
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
