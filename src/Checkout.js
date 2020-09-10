import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal.js";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/Jupiter19/Launches/new/Store-Page_PC_CAT_Headers_GPS_1500x250._CB437086357_.jpg"
          alt=""
        />
        <div>
          <h1 className="checkout__title">Your Shopping Basket</h1>
          {/*  BasketItem */}
          {/*  BasketItem */}
          {/*  BasketItem */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
