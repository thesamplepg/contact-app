import * as actionTypes from "../consts";

export const getContacts = () => dispatch => {
  dispatch({ type: actionTypes.GET_CONTACTS });

  fetch("https://contact-app-endpoints.herokuapp.com/api")
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: actionTypes.GET_CONTACTS_TRUE,
        payload: { contacts: data.contacts }
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: actionTypes.GET_CONTACTS_FALSE
      });
    });
};

export const createContactAddress = contact => {
  return {
    type: actionTypes.CREATE_CONTACT_ADDRESS,
    payload: { contact }
  };
};

export const removeContactAddress = index => (dispatch, getState) => {
  fetch("https://contact-app-endpoints.herokuapp.com/api", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE",
    body: JSON.stringify(getState().contacts[index])
  }).catch(err => console.log(err));

  dispatch({
    type: actionTypes.REMOVE_CONTACT_ADDRESS,
    payload: { index }
  });
};

export const updateContactAddress = (index, contact) => {
  fetch("https://contact-app-endpoints.herokuapp.com/api", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "PUT",
    body: JSON.stringify(contact)
  }).catch(err => console.log(err));

  return {
    type: actionTypes.UPDATE_CONTACT_ADDRESS,
    payload: { index, contact }
  };
};
