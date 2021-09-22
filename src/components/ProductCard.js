import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ image, name, price, id }) => {
  return (
    <Link className="link" to={`/product/${id}`}>
      <div className="card-container">
        <div class="displayimg-holder">
          <img className="card-img" src={image} alt="product" />
        </div>
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
