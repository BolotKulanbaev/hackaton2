import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";
import CartContextProvider from "./contexts/cartContext";

import FlowersContextProvider from "./contexts/flowersContext";
import Routing from "./Routing";

const App = () => {
  return (
    <CartContextProvider>
      <FlowersContextProvider>
        <BrowserRouter>
          <Header />
          <Routing />
          <Footer />
        </BrowserRouter>
      </FlowersContextProvider>
    </CartContextProvider>
  );
};

export default App;
