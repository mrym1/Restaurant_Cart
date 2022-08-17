import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Product = (props) => {
  const { removeItem, increment, decrement } = useContext(CartContext);
  return (
    <div>
      <div className="items-info">
        <div className="image">
          <img src={props.img} alt="..." />
        </div>
        <div className="title">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div className="quantity">
          <i className="fas fa-minus" onClick={() => decrement(props.id)}></i>
          <input type="text" placeholder={props.quantity} />
          <i className="fas fa-plus" onClick={() => increment(props.id)}></i>
        </div>
        <div className="price">
          <h3>Rs: {props.price}</h3>
        </div>

        <div className="delete-item">
          <i
            className="fas fa-trash-alt delete"
            onClick={() => removeItem(props.id)}
          >
            <span className="re">Remove</span>
          </i>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Product;
