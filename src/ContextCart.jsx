import React, { useContext } from "react";
import Products from "./Product";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item, totalAmount, totalItem, Discount, totalBill } =
    useContext(CartContext);
  return (
    <>
      <h1 className="heading_style"> Cart </h1>
      <section className="cart-section">
        <h1 className="heading">
          Your Cart ( <span className="total-items-count">{totalItem} </span>{" "}
          items )
        </h1>
      </section>
      <section className="cart-section">
        <div className="cart-items">
          <div className="items-container">
            {item.map((curItem) => {
              return <Products key={curItem.id} {...curItem} />;
            })}
          </div>
        </div>
        <div className="bill">
          <h3>
            Sub Total:&emsp;Rs. <span>{totalAmount}</span>
          </h3>
          <hr />
          <h3>
            Discount:&emsp;Rs. <span>{Discount}</span>
          </h3>
          <hr />
          <h3>
            Delivery Fee:&emsp; Rs. <span>200</span>
          </h3>
          <hr />
          <br />
          <h3>
            Your Bill Is:&emsp;Rs. <span>{totalBill}</span>
          </h3>
          <button>Checkout</button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
