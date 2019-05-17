import React, { Component } from "react";
import { connect } from "react-redux";

import RenderForm from "../../components/RenderForm";
import { createContactAddress } from "../../store/actions/contacts";
import { inputs } from "../../configs";
import { validate, inputHandler } from "../../utilits";

class AddContactAddress extends Component {
  constructor(props) {
    super(props);

    this.inputHandler = inputHandler.bind(this);
  }

  state = {
    inputs,
    errors: [],
    image: null
  };

  appendValues = data => {
    const { inputs } = this.state;

    for (let key in inputs) {
      data.append(key, inputs[key].value);
    }

    return data;
  };

  createContact = (e, form) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    const errors = validate(this.state.inputs);

    if (errors.length) return this.setState({ errors });

    const data = this.appendValues(formData);

    this.props.createContactAddress(data, () => {
      this.props.close();
      this.cleanOut();
    });
  };

  cleanOut = () => {
    this.setState({
      inputs: inputs,
      errors: []
    });
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
        changeHandler={this.inputHandler}
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

export const TestComponent = AddContactAddress;

export default connect(
  state => {
    return {
      contacts: state.contacts,
      loading: state.createLoading
    };
  },
  { createContactAddress }
)(AddContactAddress);
