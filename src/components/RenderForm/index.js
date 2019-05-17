import React from "react";

import classes from "./index.scss";
import ButtonLoader from "../UI/ButtonLoader";

const RenderForm = ({
  inputs,
  changeHandler,
  createContact,
  errors,
  isOpen,
  loading,
  image,
  fileInputHandler
}) => {
  const inputsOutput = [];

  for (let key in inputs) {
    const input = inputs[key];
    const error = errors.find(error => error === key);

    inputsOutput.push(
      <input
        id={key}
        className={error ? classes.HighlightedInput + " error" : null}
        onChange={changeHandler}
        key={key}
        value={input.value}
        type={input.type}
        placeholder={key}
      />
    );
  }

  const form = React.createRef();

  return (
    <form
      ref={form}
      style={{ top: isOpen ? "50%" : "-100%" }}
      className={classes.AddContactForm}
      encType="multipart/form-data"
    >
      <h2>New Contact Address</h2>
      <input
        onChange={fileInputHandler}
        type="file"
        name="avatar"
        multiple={false}
        id="avatarInput"
      />
      <label htmlFor="avatarInput">Choose Image (Optional)</label>
      {image ? (
        <img className={classes.ChoosedImage} src={image} alt="choosed_image" />
      ) : null}
      {inputsOutput}
      <p className={classes.Error}>
        {errors.length ? `These fields are required` : null}
      </p>
      <button
        disabled={loading}
        className={classes.Submit}
        onClick={e => createContact(e, form)}
      >
        New Contact
        {loading ? <ButtonLoader /> : null}
      </button>
    </form>
  );
};

export default RenderForm;
