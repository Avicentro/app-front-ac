import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Router from "./router/Router/Router";
import { theme } from "./static/styles/theme";
import { Provider } from "react-redux";
import store from "./store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Toast from "./components/feedback/Toast";

const queryClient = new QueryClient();

const App = () => {

  useEffect(() => {
    const today = new Date().toLocaleDateString();
    const lastClosed = localStorage.getItem('lastClosed');

    if (lastClosed !== today) {
      localStorage.removeItem('customersMarked');
      localStorage.removeItem('idIceProduction');
      localStorage.removeItem('initProcessId');
      localStorage.setItem('lastClosed', today);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router />
          <Toast />
        </ThemeProvider>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
