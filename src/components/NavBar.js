import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  //get cart items (to find the length of cart items)
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <div className="nav-outer">
      <div className="nav-inner">
        <div className="title-container">
          <Link className="link" to={"/"}>
            <h1 className="pageTitle">Carla & Fig Art</h1>
          </Link>
          <p className="nav-blurb">Homemade ceramic creations</p>
        </div>
        <Link to={"/cart"}>
          <div className="icon-holder">
            <FontAwesomeIcon icon={faShoppingCart} className="shop-icon icon" />

            {cartItems.length === 0 ? (
              <></>
            ) : (
              <div className="cart-counter">{cartItems.length}</div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
