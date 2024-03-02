import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routes/Routers";
import Carts from "../UI/Cart/Carts";

import { useDispatch, useSelector } from "react-redux";
export default function Layout() {
  const showCart = useSelector((state) => state.cartUiDash.cartIsVisiable);
  return (
    <div className="">
      <Header />
      {showCart && <Carts />}

      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
}
