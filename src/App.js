import React from "react";
import CardsDetails from "./components/CardsDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Success from "../src/components/Success";
import Cencel from "./components/Cencel";
import Checkout from "./pages/Checkout";
import ViewCart from "./pages/ViewCart";
import CartDetail from "./pages/CartDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Delivery from "./pages/ Delivery";
import EditCheckout from "./pages/EditCheckout";
import Shop from "./pages/Shop";
import OrderList from "./pages/OrderList.js";
// import PrivateRoutes from "./PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/cart/:id" element={<CardsDetails />} />
          <Route path="/cart" element={<ViewCart />} />
          <Route path="/detail" element={<CartDetail />} />
          <Route path="/shoping" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route exact element={<PrivateRoutes />}> */}
          <Route path="/payment-method" element={<Delivery />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cencel" element={<Cencel />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/edit-checkout" element={<EditCheckout />} />
          <Route path="/orders" element={<OrderList />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
