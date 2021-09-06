import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "./store/store";

import RouterApp from "./components/RouterApp";

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <RouterApp />
    </Provider>
  </BrowserRouter>
  );
}

export default App;