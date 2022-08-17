const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter((curElem) => {
        return curElem.id !== action.payload;
      }),
    };
  }
  if (action.type === "INCREMENT") {
    let updatedCart = state.item.map((curElem) => {
      if (curElem.id === action.payload) {
        return {
          ...curElem,
          quantity: curElem.quantity + 1,
        };
      }
      return curElem;
    });
    return { ...state, item: updatedCart };
  }
  if (action.type === "DECREMENT") {
    let updatedCart = state.item
      .map((curElem) => {
        if (curElem.id === action.payload) {
          return {
            ...curElem,
            quantity: curElem.quantity - 1,
          };
        }
        return curElem;
      })
      .filter((curElem) => {
        return curElem.quantity !== 0;
      });
    return { ...state, item: updatedCart };
  }
  if (action.type === "GET_TOTAL") {
    let { totalItem, totalAmount, Discount, totalBill } = state.item.reduce(
      (accum, curVal) => {
        let { price, quantity } = curVal;

        let updatedTotalAmount = price * quantity;
        accum.totalAmount += updatedTotalAmount;

        accum.totalItem += quantity;

        let updatedDiscount = (accum.totalAmount * (0.2 * 100)) / 100;
        accum.Discount += updatedDiscount;

        let updatedTotalBill = updatedTotalAmount + 200 - updatedDiscount;
        accum.totalBill += updatedTotalBill;

        return accum;
      },
      {
        totalItem: 0,
        totalAmount: 0,
        Discount: 0,
        totalBill: 0,
      }
    );
    return { ...state, totalItem, totalAmount, Discount, totalBill };
  }

  return state;
};

export default reducer;
