import "./CartScreen.css";
// import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

//Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  //updating qty change of cart item in state
  const qtyChange = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  //remove item from cart
  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  //get cart total price
  const getCartTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };

  return (
    <div className="cart-outer">
      <div className="cart-inner">
        <h2 className="cart-title">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="cart-empty">
            Your cart is empty, <Link to="/">continue shopping</Link>
          </p>
        ) : (
          <>
            <div className="cart-headers">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
            {cartItems.map((el, i) => (
              <CartItem
                key={i}
                item={el}
                qtyChange={qtyChange}
                removeItem={removeItem}
              />
            ))}

            <div className="cart-bottom">
              <div className="cart-bottom-inner">
                <div className="subtotal">
                  <p className="st-title">Subtotal</p>
                  <p className="st-price">${getCartTotal().toFixed(2)}</p>
                </div>
                <p className="blurb">Shipping & taxes calculated at checkout</p>
                <button
                  className="checkout-btn"
                  onClick={() => console.log("done")}
                >
                  Check Out
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartScreen;
