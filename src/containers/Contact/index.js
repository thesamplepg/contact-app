import React, { Component } from "react";

import ContactInformation from "../../components/ContactInformation";
import ContactUpdateForm from "../../components/ContactUpdateForm";
import { inputs as inputsConf } from "../../configs";
import { validate, inputHandler } from "../../utilits";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.inputHandler = inputHandler.bind(this);
  }

  state = {
    isUpdate: false,
    inputs: {},
    errors: []
  };

  static getDerivedStateFromProps = (props, state) => {
    if (!Object.keys(state.inputs).length) {
      const inputs = inputsConf;
      const { contact } = props;

      for (let key in inputs) {
        inputs[key].value = contact[key];
      }

      return { inputs };
    }

    return null;
  };

  componentDidMount() {
    document.addEventListener("click", () => {
      this.setState({ isUpdate: false });
    });
  }

  onUpdate = () => {
    const errors = validate(this.state.inputs);

    if (errors.length) return this.setState({ errors });

    const { name, address, phone } = this.state.inputs;

    const data = {
      name: name.value,
      address: address.value,
      phone: phone.value
    };

    data._id = this.props.contact._id;
    this.props.update(data);
    this.setState({ isUpdate: false });
  };

  render() {
    return this.state.isUpdate ? (
      <ContactUpdateForm
        inputs={this.state.inputs}
        change={this.inputHandler}
        errors={this.state.errors}
        update={this.onUpdate}
      />
    ) : (
      <ContactInformation
        {...this.props.contact}
        showUpdateForm={() => this.setState({ isUpdate: true })}
        remove={this.props.remove}
      />
    );
  }
}

export default Contact;
