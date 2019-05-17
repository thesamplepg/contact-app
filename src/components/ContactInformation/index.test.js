import React from "react";
import { shallow } from "enzyme";

import Component from "./index";
import classes from "./index.scss";

describe("ContactInformation Component", () => {
  const props = {
    name: "name",
    phone: "phone",
    address: "allove"
  };

  const renderComponent = props => shallow(<Component {...props} />);

  it("render propertly", () => {
    expect(renderComponent(props)).toMatchSnapshot();
  });

  describe("contact information", () => {
    it("should render all information about contact correctly", () => {
      const component = renderComponent(props);

      const { name, address, phone } = props;

      expect(component.find(`.${classes.Name}`).text()).toBe(name);
      expect(component.find(`.${classes.Phone}`).text()).toBe(phone);
      expect(component.find(`.${classes.Address}`).text()).toBe(address);
    });
  });
});
