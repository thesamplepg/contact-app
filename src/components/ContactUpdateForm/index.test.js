import React from "react";
import { shallow } from "enzyme";

import ContactUpdateForm from "./index";
import { inputs } from "../../configs";

describe("RenderForm component", () => {
  const props = {
    inputs,
    errors: []
  };

  const renderComponent = props => shallow(<ContactUpdateForm {...props} />);

  it("should render all inputs", () => {
    const component = renderComponent(props);
    expect(component.find("input").length).toBe(3);
  });

  it("input[name] should have a class <error>", () => {
    const nextProps = { ...props, errors: ["name"] };
    const component = renderComponent(nextProps);

    const nameInput = component.find('input[id="name"]');

    expect(nameInput.hasClass("error")).toBeTruthy();
  });
});
