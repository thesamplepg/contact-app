import React from "react";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import classes from "./index.scss";
import Icon from "../UI/Icon";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <a href="contact-app" target="_blanck">
        <Icon icon={faCode} />
      </a>
      <p>Aktan Tashmatov</p>
    </footer>
  );
};

export default Footer;
