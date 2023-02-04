import React from "react";
import CardsDetails from "./components/CardsDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Success from "../src/components/Success";
import Cencel from "./components/Cencel";
import Checkout from "./pages/Checkout";
import ViewCart from "./pages/ViewCart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/cart/:id" element={<CardsDetails />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cencel" element={<Cencel />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/view-cart" element={<ViewCart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
