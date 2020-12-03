import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";

import { App } from "./components";
import appStore from "./store";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={appStore}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
