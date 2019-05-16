import React from "react";
import { shallow } from "enzyme";

import classes from "./index.scss";
import RenderForm from "./index";

describe("RenderForm component", () => {
  it("should render all inputs", () => {
    const component = shallow(<RenderForm />);
    const form = component.find("form");
    console.log(form);
  });
});
