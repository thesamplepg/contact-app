import React, { Component } from "react";

import ContactInformation from "components/ContactInformation";
import ContactUpdateForm from "../../components/ContactUpdateForm";
import { inputs as inputsConf } from "src/configs";
import { validate } from "../utilits";

class Contact extends Component {
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

  startUpdating = e => {
    this.setState({ isUpdate: true });
  };

  inputHandler = (e, key) => {
    const inputs = { ...this.state.inputs };

    inputs[key].value = e.target.value;

    this.setState({ inputs: inputs });
  };

  onUpdate = () => {
    if (validate.call(this)) {
      const { name, address, phone } = this.state.inputs;

      const data = {
        name: name.value,
        address: address.value,
        phone: phone.value
      };

      data._id = this.props.contact._id;
      this.props.update(data);
      this.setState({ isUpdate: false });
    }
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
        startUpdating={this.startUpdating}
        remove={this.props.remove}
      />
    );
  }
}

export default Contact;
