import React, { createContext, useReducer } from "react";
import Data from "./Data";
import ContextCart from "./ContextCart";
import reducer from "./reducer";
import { useEffect } from "react";

export const CartContext = createContext();

const initialState = {
  item: Data,
  totalAmount: 0,
  totalItem: 0,
  Discount: 0,
  totalBill: 0,
};
function Cart() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [product] = useState(Data);

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const increment = (id) => {
    return dispatch({
    type: "INCREMENT",
    payload: id,
  })
  }

  const decrement = (id) => {
    return dispatch({
    type: "DECREMENT",
    payload: id,
  })
  }

  useEffect(() => {
    dispatch({ type: "GET_TOTAL"})
  }, [state.item])


  return (
    <>
      <CartContext.Provider value={{ ...state, removeItem, increment, decrement }}>
        <ContextCart />
      </CartContext.Provider>
    </>
  );
}

export default Cart;
