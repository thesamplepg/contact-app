import React from "react";
import { shallow } from "enzyme";

import Component from "./index";

describe("Contact Component", () => {
  const props = {
    contact: {
      name: "test",
      address: "address",
      phone: "213123532"
    }
  };

  const renderComponent = props => shallow(<Component {...props} />);

  describe("getDerivedStateFromProps Hook", () => {
    it("should update inputs state depends on contact", () => {
      const instance = renderComponent(props).instance();
      const { inputs } = instance.state;

      const inputsValues = {};
      Object.keys(inputs).forEach(key => [
        (inputsValues[key] = inputs[key].value)
      ]);

      expect(inputsValues).toEqual(props.contact);
    });
  });

  describe("onUpdate handler", () => {
    const mockUpdate = jest.fn();

    it("should call update mock function", () => {
      const nextProps = {
        ...props,
        contact: {
          ...props.contact,
          _id: "64397123"
        },
        update: mockUpdate
      };
      const instance = renderComponent(nextProps).instance();

      instance.onUpdate();

      expect(mockUpdate).toHaveBeenCalled();
    });
  });

  describe("Render component depends on isUpdate", () => {
    const component = renderComponent(props);

    it("should render ContactUpdateForm when isUpdate is true", () => {
      const instance = component.instance();

      instance.setState({ isUpdate: true });

      expect(component.find("ContactUpdateForm").exists).toBeTruthy();
    });

    it("should render ContactInformation", () => {
      const instance = component.instance();

      instance.setState({ isUpdate: false });

      expect(component.find("ContactInformation").exists()).toBeTruthy();
    });
  });
});
