import React from "react";

import classes from "./index.scss";
import Contact from "../../containers/Contact";

const ContactsList = ({
  contacts,
  removeContactAddress,
  updateContactAddress
}) => {
  return contacts.length > 0 ? (
    <ul className={classes.ContactsList}>
      {contacts.map((contact, index) => {
        return (
          <Contact
            remove={() => removeContactAddress(index)}
            update={updated => updateContactAddress(index, updated)}
            key={index}
            contact={contact}
          />
        );
      })}
    </ul>
  ) : (
    <h1 className={classes.Error}>No contacts found</h1>
  );
};

export default ContactsList;
