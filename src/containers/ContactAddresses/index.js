import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./index.scss";
import ContactsList from "../../components/ContactsList";
import { removeContactAddress, updateContactAddress } from "actions/contacts";

class ContactAddresses extends Component {
  render() {
    return (
      <section className={classes.ContactAddresses}>
        <ContactsList
          removeContactAddress={this.props.removeContactAddress}
          updateContactAddress={this.props.updateContactAddress}
          contacts={this.props.contacts}
        />
      </section>
    );
  }
}

export default connect(
  state => ({
    contacts: state.contacts
  }),
  { removeContactAddress, updateContactAddress }
)(ContactAddresses);
