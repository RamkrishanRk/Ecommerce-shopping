import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/assets/css/style.css";
import store, { persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../src/assets/css/swiper-bundle.min.css";
import "../src/assets/css/style.default.css";
import "../src/assets/js/bootstrap.bundle.min.js";
// import "../src/assets/js/swiper-bundle.min.js";

const apiKey = `${process.env.REACT_APP_TITLE}`;
const stripePromise = loadStripe(apiKey);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer autoClose={2000} />
      <PersistGate persistor={persistor}>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
