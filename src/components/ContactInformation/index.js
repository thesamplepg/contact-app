import React from "react";
import { faTrash, faPenAlt } from "@fortawesome/free-solid-svg-icons";

import classes from "./index.scss";
import Icon from "../UI/Icon";

const ContactInformation = props => {
  return (
    <li className={classes.ContactInformation}>
      <div className={classes.ImageWrapper}>
        <img
          src={
            props.image
              ? props.image.url
              : "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"
          }
          alt="user"
        />
      </div>
      <figure className={classes.Information}>
        <p className={classes.Name}>{props.name}</p>
        <p className={classes.Phone}>{props.phone}</p>
        <p className={classes.Address}>{props.address}</p>
      </figure>
      <div className={classes.Options}>
        <button className={classes.DeleteButton} onClick={props.remove}>
          <Icon icon={faTrash} />
        </button>
        <button className={classes.UpdateButton} onClick={props.showUpdateForm}>
          <Icon icon={faPenAlt} />
        </button>
      </div>
    </li>
  );
};

export default ContactInformation;
