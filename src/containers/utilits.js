export function validate() {
  const { name, address, phone } = this.state.inputs;
  const errors = [];

  name.value.length < name.required && errors.push("name");
  address.value.length < address.required && errors.push("address");
  phone.value.length < phone.required && errors.push("phone");

  if (errors.length) {
    this.setState({ errors });
    return false;
  }

  return true;
}
