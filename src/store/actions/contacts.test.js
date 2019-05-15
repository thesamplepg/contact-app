import configureMockStore from "redux-mock-store";
import http from "fetch-mock";

import * as actions from "./contacts";
import thunk from "../middlewares/thunk";

const mockStore = configureMockStore([thunk]);

const api = "https://contact-app-endpoints.herokuapp.com/api";

describe("Async actions", () => {
  afterAll(() => {
    http.reset();
    http.restore();
  });

  it("get contacts ", () => {
    http.getOnce(api, {
      contacts: [1, 2, 3]
    });

    const expectedActions = [
      actions.getContactsAction(),
      actions.getContactsSuccess([1, 2, 3])
    ];

    const store = mockStore({});

    store.dispatch(actions.getContacts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("create a contact ", () => {
    const contact = { name: "Test" };

    http.postOnce(api, { contact });

    const expectedActions = [
      actions.createContactAddressAction(),
      actions.createContactAddressSucccess(contact)
    ];

    const store = mockStore({});

    store
      .dispatch(actions.createContactAddress(contact, () => {}))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
      .catch(err => console.log(err));
  });

  it("update contact", () => {
    http.putOnce(api, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const expectedActions = [
      actions.updateContactAddressAction(0, {}),
      actions.updateContactAddressSuccess()
    ];

    const store = mockStore({});

    store.dispatch(actions.updateContactAddress(0, {})).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("delete contact", () => {
    http.deleteOnce(api, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const expectedActions = [
      actions.removeContactAddressAction(0),
      actions.removeContactAddressSuccess()
    ];

    const store = mockStore({ contacts: [1] });

    store.dispatch(actions.removeContactAddress(0)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
