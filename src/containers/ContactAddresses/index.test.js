import React from "react";
import { shallow } from "enzyme";

import { TestComponent } from "./index";

describe("ContactAddresses Component", () => {
  const props = { contacts: [] };

  const renderComponent = props => shallow(<TestComponent {...props} />);

  it("render propertly", () => {
    expect(renderComponent(props)).toMatchSnapshot();
  });
});
