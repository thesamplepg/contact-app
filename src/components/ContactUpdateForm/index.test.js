import React from "react";
import { shallow } from "enzyme";

import Component from "./index";
import { inputs } from "../../configs";

describe("ContactUpdateForm component", () => {
  const props = {
    inputs,
    errors: []
  };

  const renderComponent = props => shallow(<Component {...props} />);

  it("render propertly", () => {
    expect(renderComponent(props)).toMatchSnapshot();
  });

  it("should render all inputs", () => {
    const component = renderComponent(props);
    expect(component.find("input")).toHaveLength(3);
  });

  it("input[name] should have a class <error>", () => {
    const nextProps = { ...props, errors: ["name"] };
    const component = renderComponent(nextProps);

    const nameInput = component.find('input[id="name"]');

    expect(nameInput.hasClass("error")).toBeTruthy();
  });
});
