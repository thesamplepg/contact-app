export function validate(inputs) {
  const { name, address, phone } = inputs;
  const errors = [];

  name.value.length < name.required && errors.push("name");
  address.value.length < address.required && errors.push("address");
  phone.value.length < phone.required && errors.push("phone");

  return errors;
}

//так можно?
export function inputHandler(e) {
  const { inputs } = this.state;
  const { id, value } = e.target;

  inputs[id].value = value;

  this.setState({ inputs });
}
