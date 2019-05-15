import reducer, { initialState } from "./contacts";
import * as actionTypes from "../consts";
import * as actions from "../actions/contacts";

describe("Contacts reducer", () => {
  describe("Get contacts", () => {
    it(`${actionTypes.GET_CONTACTS}`, () => {
      const action = actions.getContactsAction();

      const state = reducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        loading: true
      });
    });

    it(`${actionTypes.GET_CONTACTS_TRUE}`, () => {
      const contact = { name: "test" };
      const action = actions.getContactsSuccess([contact]);

      const updatedState = reducer(initialState, action);

      expect(updatedState).toEqual({
        ...initialState,
        loading: false,
        contacts: [contact]
      });
    });

    it(`${actionTypes.GET_CONTACTS_FALSE}`, () => {
      const action = actions.getContactsFail();
      const updatedState = reducer(initialState, action);

      expect(updatedState).toEqual({
        ...initialState,
        loading: false
      });
    });
  });

  describe("Create a new contact", () => {
    it(`${actionTypes.CREATE_CONTACT_ADDRESS}`, () => {
      const action = actions.createContactAddressAction();

      const updatedState = reducer(initialState, action);

      expect(updatedState).toEqual({
        ...initialState,
        createLoading: true
      });
    });

    it(`${actionTypes.CREATE_CONTACT_ADDRESS_TRUE}`, () => {
      const contact = { name: "Teset" };
      const action = actions.createContactAddressSucccess(contact);

      const updatedState = reducer(initialState, action);

      expect(updatedState).toEqual({
        ...initialState,
        createLoading: false,
        contacts: [contact]
      });
    });

    it(`${actionTypes.CREATE_CONTACT_ADDRESS_FALSE}`, () => {
      const action = actions.createContactAddressFalse();

      const updatedState = reducer(initialState, action);

      expect(updatedState).toEqual({
        ...initialState,
        createLoading: false
      });
    });
  });

  describe("Update and Delete operations", () => {
    it(`${actionTypes.UPDATE_CONTACT_ADDRESS}`, () => {
      const state = { ...initialState, contacts: [{ name: "Teset" }] };
      const updated = { name: "Player" };

      const action = {
        type: actionTypes.UPDATE_CONTACT_ADDRESS,
        payload: { contact: updated, index: 0 }
      };

      const updatedState = reducer(state, action);

      expect(updatedState).toEqual({
        ...initialState,
        contacts: [updated]
      });
    });

    it(`${actionTypes.REMOVE_CONTACT_ADDRESS}`, () => {
      const state = { ...initialState, contacts: [{ name: "Teset" }] };

      const action = {
        type: actionTypes.REMOVE_CONTACT_ADDRESS,
        payload: { index: 0 }
      };

      const updatedState = reducer(state, action);

      expect(updatedState).toEqual({
        ...initialState,
        contacts: []
      });
    });
  });
});
