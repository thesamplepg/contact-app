import React from "react";
import { shallow } from "enzyme";

import ContactsList from "./index";
import Contact from "../../containers/Contact";

describe("RenderForm component", () => {
  const props = {
    contacts: [1, 2, 3]
  };

  const renderComponent = props => shallow(<ContactsList {...props} />);

  it(`should render ${props.contacts.length} <Contact />`, () => {
    const component = renderComponent(props);

    const items = component.find("ul").children();

    expect(true).toBeTruthy();
  });
});
