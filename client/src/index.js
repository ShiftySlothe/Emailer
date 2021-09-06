import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App";
import reducers from "./reducers";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./material-ui/theme";
import { CssBaseline } from "@material-ui/core";

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.querySelector("#root")
);
