import { createStore, applyMiddleware } from "redux";

import logger from "./middlewares/logger";
import thunk from "./middlewares/thunk";
import contactsReducer from "./reducers/contacts";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") middlewares.push(logger);

export default createStore(contactsReducer, applyMiddleware(...middlewares));
