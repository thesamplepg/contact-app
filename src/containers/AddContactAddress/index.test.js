import React from "react";
import { shallow, mount } from "enzyme";

import { TestComponent } from "./index";
import { inputs } from "../../configs";

describe("AddContactAddres Component", () => {
  const props = {
    inputs
  };

  const renderComponent = props => shallow(<TestComponent {...props} />);

  describe("AppendValues function", () => {
    it("should call appendMockFunction 3 times", () => {
      const mockAppendChild = jest.fn();

      const data = { append: mockAppendChild };

      const instance = renderComponent(props).instance();

      instance.appendValues(data);

      expect(mockAppendChild).toHaveBeenCalledTimes(3);
    });
  });

  describe("CreateContact function", () => {
    it("should call createContactAddres mock", () => {
      const mockCreateContact = jest.fn();
      const preventDefault = jest.fn();

      const nextProps = {
        ...props,
        createContactAddress: mockCreateContact
      };

      const component = mount(<TestComponent {...nextProps} />);

      Object.keys(props.inputs).forEach(key => {
        const input = component.find(`input[id="${key}"]`);
        input.simulate("change", { target: { value: "testtext32", id: key } });
      });

      const instance = component.instance();

      instance.createContact({ preventDefault }, <form>a</form>);

      expect(preventDefault).toHaveBeenCalled();
      expect(mockCreateContact).toHaveBeenCalled();
    });
  });

  describe("Clenout function ", () => {
    it("should cleanout inputs and errors", () => {
      const component = renderComponent(props).instance();

      component.cleanOut();

      expect(component.state.inputs).toEqual(inputs);
      expect(component.state.errors).toHaveLength(0);
    });
  });
});
