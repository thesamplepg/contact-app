import React from "react";
import { shallow } from "enzyme";

import Component from "./index";

describe("ContactList Component", () => {
  const props = {
    contacts: [1, 2, 3]
  };

  const renderComponent = props => shallow(<Component {...props} />);

  it("render propertly", () => {
    expect(renderComponent(props)).toMatchSnapshot();
  });

  describe("list of Contacts", () => {
    it(`should render ${props.contacts.length} <Contact />`, () => {
      const component = renderComponent(props);

      const items = component.find("Contact");

      expect(items).toHaveLength(props.contacts.length);
    });
  });

  describe("No contacts provided", () => {
    it("should render h1 tag when no contacts", () => {
      props.contacts = [];

      const component = renderComponent(props);

      const h1 = component.find("h1");

      expect(h1.text()).toBe("No contacts found");
    });
  });
});
