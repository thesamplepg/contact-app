import React from "react";
import { shallow } from "enzyme";

import Component from "./index";

describe("PlusButton ui component", () => {
  const renderComponent = () => shallow(<Component />);

  it("render propertly", () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});
