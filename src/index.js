import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/assets/css/style.css";
import store, { persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const apiKey = `${process.env.REACT_APP_TITLE}`;
const stripePromise = loadStripe(apiKey);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
