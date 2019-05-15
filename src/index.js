import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";

import "./index.scss";
import store from "./store";
import App from "./App";

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
