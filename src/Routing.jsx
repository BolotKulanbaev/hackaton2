import React from "react";
import { Route, Routes } from "react-router-dom";

import AddFlowers from "./components/AddFlowers/AddFlowers";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details/Details";
import EditFlowers from "./components/EditFlowers/EditFlowers";
import FlowersList from "./components/FlowersList/FlowersList";
import ReadMore from "./components/ReadMore/ReadMore";

const Routing = () => {
  return (
    <Routes>
      <Route path="/flowers" element={<FlowersList />} />
      <Route path="/add-flowers" element={<AddFlowers />} />
      <Route path="/edit/:id" element={<EditFlowers />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/more" element={<ReadMore />} />
    </Routes>
  );
};

export default Routing;
