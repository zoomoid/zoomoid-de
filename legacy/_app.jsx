import { Provider } from "react-redux";
// import "../app/globals.css";
import React from "react";
import store from "components/interactive/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
