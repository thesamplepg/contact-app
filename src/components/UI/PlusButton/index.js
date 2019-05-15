import React from "react";

import classes from "./index.scss";

const PlusButton = ({ openForm }) => {
  return (
    <button onClick={openForm} className={classes.PlusButton}>
      <div />
      <div />
    </button>
  );
};

export default PlusButton;
