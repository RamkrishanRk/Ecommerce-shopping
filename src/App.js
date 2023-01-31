import React from "react";
import CardsDetails from "./components/CardsDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/Card";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/cart/:id" element={<CardsDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
