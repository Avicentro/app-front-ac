import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Router from "./router/Router/Router";
import { theme } from "./static/styles/theme";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router></Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
