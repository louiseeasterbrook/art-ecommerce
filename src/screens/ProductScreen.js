import "./ProductScreen.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

//components
import Loading from "../components/Loading";

//Actions
import { getOneProduct } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = () => {
  const { id } = useParams();
  let history = useHistory();

  //new
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.getOneProduct);
  const { product, loading, error } = productDetails;

  //fetch product data
  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getOneProduct(id));
    }
  }, [dispatch, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push("/cart");
  };

  return (
    <div className="product-outer">
      <div className="product-inner">
        {loading ? (
          <Loading />
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <>
            <div className="img-holder">
              <img
                src={product.image}
                alt={product.name}
                className="display-img"
              />
            </div>
            <div className="text-holder">
              <h2>{product.name}</h2>
              <h4>${product.price}</h4>
              <p className="product-desc">{product.description}</p>
              <p className="quantity-title">Quantity</p>
              <input
                className="quantity-input"
                type="number"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              ></input>
              <button className="add-button" onClick={addToCartHandler}>
                Add to cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductScreen;
