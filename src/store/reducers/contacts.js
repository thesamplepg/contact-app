import * as actionTypes from "../consts";

export const initialState = {
  contacts: [],
  loadgin: true,
  createLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CONTACTS: {
      return { ...state, loading: true };
    }
    case actionTypes.GET_CONTACTS_TRUE: {
      return {
        ...state,
        contacts: action.payload.contacts,
        loading: false
      };
    }
    case actionTypes.GET_CONTACTS_FALSE: {
      return {
        ...state,
        loading: false
      };
    }
    case actionTypes.CREATE_CONTACT_ADDRESS: {
      return {
        ...state,
        createLoading: true
      };
    }
    case actionTypes.CREATE_CONTACT_ADDRESS_TRUE: {
      return {
        ...state,
        contacts: [...state.contacts, action.payload.contact],
        createLoading: false
      };
    }
    case actionTypes.CREATE_CONTACT_ADDRESS_FALSE: {
      return {
        ...state,
        createLoading: false
      };
    }
    case actionTypes.REMOVE_CONTACT_ADDRESS: {
      const contacts = [...state.contacts];
      contacts.splice(action.payload.index, 1);

      return {
        ...state,
        contacts
      };
    }
    case actionTypes.UPDATE_CONTACT_ADDRESS: {
      const { index, contact } = action.payload;
      const contacts = [...state.contacts];

      contacts.splice(index, 1, contact);

      return {
        ...state,
        contacts
      };
    }
    default:
      return state;
  }
};
