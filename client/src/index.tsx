import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactRedux from "react-redux";
import { initialStore } from "./store";
import "./index.css";

import App from "./App";

const store = initialStore.configureStore();

const Root: React.FC = (): React.ReactElement => (
  <ReactRedux.Provider store={store}>
    <App />
  </ReactRedux.Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
