import React from "react";
import { shallow } from "enzyme";

import Component from "./index";

describe("Loader UI Component", () => {
  const renderComponent = () => shallow(<Component />);

  it("render propertly", () => {
    expect(renderComponent()).toMatchSnapshot();
  });
});
