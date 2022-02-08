import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App";
import reducers from "./redux/reducers";
import reduxThunk from "redux-thunk";
import { ChakraProvider } from "@chakra-ui/react";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>,
  document.querySelector("#root")
);
