import React from "react";
import { shallow } from "enzyme";

import { TestComponent } from "./index";
import { inputs } from "../../configs";

describe("RenderForm component", () => {
  const mockCreateContact = jest.fn();

  const props = {
    errors: [],
    contacts: [1, 2, 3],
    createContactAddress: mockCreateContact
  };

  const renderComponent = props => shallow(<TestComponent {...props} />);

  describe("Clenout function ", () => {
    it("should cleanout inputs and errors", () => {
      const component = renderComponent(props).instance();

      component.cleanOut();

      expect(component.state.inputs).toEqual(inputs);
      expect(component.state.errors).toHaveLength(0);
    });
  });
});
