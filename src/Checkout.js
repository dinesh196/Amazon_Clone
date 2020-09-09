import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_Add"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/MI_Laptops/02-09-2020/Horizon/V238940049_IN_PC_BAU_Edit_Creation_Laptops_1500x300.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout_title">Your shopping basket</h2>
          {/* basket */}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
