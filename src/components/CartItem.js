import "./CartItem.css";
// import { useState } from "react";

const CartItem = ({ item, qtyChange, removeItem }) => {
  const itemTotalPrice = () => {
    return item.price * item.qty;
  };

  return (
    <div className="cartItem-outer">
      <div className="cartItem-inner">
        <div className="cart-imgholder">
          <img className="cart-img" src={item.image} alt={item.name} />
        </div>
        <div className="name-holder">
          <p className="cart-name">{item.name}</p>
          <p className="cart-remove" onClick={() => removeItem(item.id)}>
            remove
          </p>
          <div className="cart-qty-mobile">
            <p>Quantity</p>
            <input
              type="Number"
              value={item.qty}
              //update quantity in state
              onChange={(e) => qtyChange(item.id, e.target.value)}
            />
          </div>
        </div>
        <div className="cart-price-container">
          <p className="cart-price">${item.price}</p>
          <p className="cart-remove-mobile" onClick={() => removeItem(item.id)}>
            remove
          </p>
        </div>
        <div className="cart-qty">
          <input
            type="Number"
            value={item.qty}
            //update quantity in state
            onChange={(e) => qtyChange(item.id, e.target.value)}
          />
        </div>
        <p className="cart-total">${itemTotalPrice().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;
