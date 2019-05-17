import React from "react";
import { shallow } from "enzyme";

import Component from "./index";
import { inputs } from "../../configs";
import ButtonLoader from "../UI/ButtonLoader";

describe("RenderForm component", () => {
  const props = {
    inputs,
    loading: false,
    errors: []
  };

  const renderComponent = props => shallow(<Component {...props} />);

  it("render propertly", () => {
    expect(renderComponent(props)).toMatchSnapshot();
  });

  it("should render all inputs", () => {
    const component = renderComponent(props);
    expect(component.find("input")).toHaveLength(4);
  });

  it("should render <ButtonLoader/> when loading is true", () => {
    const nextProps = { ...props, loading: true };
    const component = renderComponent(nextProps);
    const buttonWrapper = component.find("button");

    expect(buttonWrapper.contains(<ButtonLoader />)).toBeTruthy();
  });

  it("input[name] should have a class <error>", () => {
    const nextProps = { ...props, errors: ["name"] };
    const component = renderComponent(nextProps);

    const nameInput = component.find('input[id="name"]');

    expect(nameInput.hasClass("error")).toBeTruthy();
  });

  describe("onChange handler", () => {
    it("should call event when user entered smth", () => {
      const changeHandler = jest.fn();

      const nextProps = {
        ...props,
        changeHandler
      };

      const component = renderComponent(nextProps);
      const inputs = component.find("input");

      inputs.forEach(node =>
        node.simulate("change", { target: { value: "asd" } })
      );

      expect(changeHandler).toHaveBeenCalledTimes(3);
    });
  });
});
