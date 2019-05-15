import * as actionTypes from "../consts";

export const getContactsAction = () => ({ type: actionTypes.GET_CONTACTS });

export const getContactsSuccess = contacts => ({
  type: actionTypes.GET_CONTACTS_TRUE,
  payload: { contacts }
});

export const getContactsFail = () => ({
  type: actionTypes.GET_CONTACTS_FALSE
});

export const getContacts = () => dispatch => {
  dispatch(getContactsAction());

  return fetch("https://contact-app-endpoints.herokuapp.com/api")
    .then(res => res.json())
    .then(data => {
      dispatch(getContactsSuccess(data.contacts));
    })
    .catch(err => {
      console.log(err);
      dispatch(getContactsFail());
    });
};

export const createContactAddressAction = () => ({
  type: actionTypes.CREATE_CONTACT_ADDRESS
});

export const createContactAddressSucccess = contact => ({
  type: actionTypes.CREATE_CONTACT_ADDRESS_TRUE,
  payload: { contact }
});

export const createContactAddressFalse = () => ({
  type: actionTypes.CREATE_CONTACT_ADDRESS_FALSE
});

export const createContactAddress = (data, afterAll) => async dispatch => {
  dispatch(createContactAddressAction());

  return fetch("https://contact-app-endpoints.herokuapp.com/api", {
    method: "POST",
    body: data
  })
    .then(res => res.json())
    .then(data => {
      afterAll();
      dispatch(createContactAddressSucccess(data.contact));
    })
    .catch(err => {
      console.log(err);
      dispatch(createContactAddressFalse());
    });
};

export const removeContactAddressAction = index => ({
  type: actionTypes.REMOVE_CONTACT_ADDRESS,
  payload: { index }
});

export const removeContactAddressSuccess = () => ({
  type: actionTypes.REMOVE_CONTACT_ADDRESS_TRUE
});

export const removeContactAddressFail = () => ({
  type: actionTypes.REMOVE_CONTACT_ADDRESS_FALSE
});

export const removeContactAddress = index => (dispatch, getState) => {
  dispatch(removeContactAddressAction(index));

  return fetch("https://contact-app-endpoints.herokuapp.com/api", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE",
    body: JSON.stringify(getState().contacts[index])
  })
    .then(() => {
      dispatch(removeContactAddressSuccess());
    })
    .catch(err => {
      console.log(err);
      dispatch(removeContactAddressFail());
    });
};

export const updateContactAddressAction = (index, contact) => ({
  type: actionTypes.UPDATE_CONTACT_ADDRESS,
  payload: { index, contact }
});

export const updateContactAddressSuccess = () => ({
  type: actionTypes.UPDATE_CONTACT_ADDRESS_TRUE
});

export const updateContactAddressFail = () => ({
  type: actionTypes.UPDATE_CONTACT_ADDRESS_FALSE
});

export const updateContactAddress = (index, contact) => dispatch => {
  dispatch(updateContactAddressAction(index, contact));

  return fetch("https://contact-app-endpoints.herokuapp.com/api", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "PUT",
    body: JSON.stringify(contact)
  })
    .then(res => {
      dispatch(updateContactAddressSuccess());
    })
    .catch(err => {
      console.log(err);
      dispatch(updateContactAddressFail());
    });
};
