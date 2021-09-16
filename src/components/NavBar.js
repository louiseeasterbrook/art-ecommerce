import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="nav-outer">
      <div className="nav-inner">
        <h1 className="pageTitle">Art by Carla</h1>
        <FontAwesomeIcon icon={faShoppingCart} className="shop-icon icon" />
      </div>
    </div>
  );
};

export default NavBar;
