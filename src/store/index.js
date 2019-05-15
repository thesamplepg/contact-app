import { createStore, applyMiddleware } from "redux";

import logger from "./middlewares/logger";
import thunk from "./middlewares/thunk";
import contactsReducer from "./reducers/contacts";

const middlewares = [thunk];

export default createStore(contactsReducer, applyMiddleware(...middlewares));
