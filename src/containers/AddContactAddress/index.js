import React, { Component } from "react";
import { connect } from "react-redux";

import RenderForm from "components/RenderForm";
import { createContactAddress } from "actions/contacts";
import { inputs } from "src/configs";
import { validate } from "../utilits";

class AddContactAddress extends Component {
  state = {
    inputs,
    errors: [],
    image: null
  };

  createContact = (e, form) => {
    e.preventDefault();

    const { inputs } = this.state;
    const data = new FormData(form.current);

    if (validate.call(this)) {
      for (let key in inputs) {
        data.append(key, inputs[key].value);
      }

      this.props.createContactAddress(data, () => {
        this.props.close();
        this.cleanOut();
      });
    }
  };

  cleanOut = () => {
    this.setState({
      inputs: inputs,
      errors: []
    });
  };

  changeHandler = e => {
    const { id, value } = e.target;
    const { inputs } = this.state;

    inputs[id].value = value;

    this.setState({ inputs });
  };

  fileInputHandler = e => {
    const fileReader = new FileReader();

    fileReader.addEventListener("load", e => {
      this.setState({ image: e.target.result });
    });

    fileReader.readAsDataURL(e.target.files[0]);
  };

  render() {
    return (
      <RenderForm
        changeHandler={this.changeHandler}
        inputs={this.state.inputs}
        createContact={this.createContact}
        errors={this.state.errors}
        isOpen={this.props.isOpen}
        loading={this.props.loading}
        image={this.state.image}
        fileInputHandler={this.fileInputHandler}
      />
    );
  }
}

export default connect(
  state => {
    return {
      contacts: state.contacts,
      loading: state.createLoading
    };
  },
  { createContactAddress }
)(AddContactAddress);
