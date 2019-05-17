import React from "react";
import { shallow } from "enzyme";

import Component from "./index";
import { inputs } from "../../configs";

describe("ContactUpdateForm Component", () => {
  const props = {
    inputs,
    errors: []
  };

  const renderComponent = props => shallow(<Component {...props} />);

  it("render propertly", () => {
    expect(renderComponent(props)).toMatchSnapshot();
  });

  describe("render inputs", () => {
    it("should render all inputs", () => {
      const component = renderComponent(props);
      expect(component.find("input")).toHaveLength(3);
    });
  });

  describe("highlight input if error detected", () => {
    it("input[name] should have a class <error>", () => {
      const nextProps = { ...props, errors: ["name"] };
      const component = renderComponent(nextProps);

      const nameInput = component.find('input[id="name"]');

      expect(nameInput.hasClass("error")).toBeTruthy();
    });
  });

  describe("onChange handler", () => {
    it("should call event when user entered smth", () => {
      const change = jest.fn();

      const nextProps = {
        ...props,
        change
      };

      const component = renderComponent(nextProps);
      const inputs = component.find("input");

      inputs.forEach(node =>
        node.simulate("change", { target: { value: "asd" } })
      );

      expect(change).toHaveBeenCalledTimes(3);
    });
  });
});
