import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-outer">
      <div className="nav-inner">
        <Link className="link" to={"/"}>
          <h1 className="pageTitle">Art by Carla</h1>
        </Link>
        <Link to={"/cart"}>
          <FontAwesomeIcon icon={faShoppingCart} className="shop-icon icon" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
