import React from "react";
import "./Checkout.css";

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
        <h2>The Subtotal will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;
