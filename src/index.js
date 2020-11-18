import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./store";
import { Logger } from "./utilities/logger";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
// import "font-awesome/css/font-awesome.min.css";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, Logger))
);

const Appication = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Appication, document.getElementById("root"));

serviceWorker.unregister();
